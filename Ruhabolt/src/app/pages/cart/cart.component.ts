import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Order } from 'src/app/shared/models/Order';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';
import { OrderService } from 'src/app/shared/services/order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartStorage: any


  constructor(private router: Router, private orderService: OrderService, public numToHuf: PricePipe) {
    router.events.subscribe(this.onRouterChange);
  }

  ngOnInit(): void {
    this.cartStorage = JSON.parse(localStorage.getItem("cartStorage") || "[]")
  }

  onRouterChange(e: any) {
    if (e instanceof NavigationEnd && e.url == "/cart") {
      this.cartStorage = JSON.parse(localStorage.getItem("cartStorage") || "[]")
      console.log(this.cartStorage)
    }
  }

  cancel(index: any) {
    delete this.cartStorage[index]
    console.log(this.cartStorage)
    this.cartStorage = this.cartStorage.filter((element: any): element is string => {
      return element !== null
    })
    localStorage.setItem("cartStorage", JSON.stringify(this.cartStorage))
  }

  order(){
    let user = JSON.parse(localStorage.getItem("user") || "[]")
    this.orderService.create({
      items: this.cartStorage,
      date: new Date(),
      uId: JSON.parse(localStorage.getItem("user") || '[]').uid,
      id: new Date().getTime().toString() + user.uid
    } as Order)
    this.cartStorage = []
    localStorage.setItem("cartStorage", JSON.stringify(this.cartStorage))
  }
}
