import { Component, OnInit } from '@angular/core';
import { QuerySnapshot } from '@angular/fire/firestore';
import { Order } from 'src/app/shared/models/Order';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService, public numToHuf: PricePipe) { }
  orderList : any

  ngOnInit(): void {
    this.orderList = JSON.parse(localStorage.getItem("orderList") || "[]")
    this.listOrders()
  }

  listOrders(){
    let user = JSON.parse(localStorage.getItem("user") || '[]')
  this.orderService.findAll(user.uid).subscribe(querySnapshot => {
    this.orderList = [...querySnapshot]
    for(let order of this.orderList){
      order.date = new Date(order.date.seconds * 1000)
    }
  })
  }

  delete(id: string){
    console.log(id)
    console.log(this.orderService.delete(id))

  }
}
