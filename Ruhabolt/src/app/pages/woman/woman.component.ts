import { Component, OnInit } from '@angular/core';
import { Clothwoman } from 'src/app/shared/models/Clothwoman';
import { WomanService } from 'src/app/shared/services/clothwoman.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { User } from 'src/app/shared/models/User';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';




@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.scss']
})
export class WomanComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem("user") || "[]")
  womanList: any
  cartStorage: any

  constructor(private womanService: WomanService, private snackBar: MatSnackBar, public numToHuf: PricePipe) { }

  ngOnInit(): void {
    this.listWomans()
  }

  openSnackBar() {
    this.snackBar.open("Hozzáadva a kosárhoz", "Ok");
  }

  listWomans() {
    this.womanService.findAll("price").subscribe((querySnap) => {
      this.womanList = []
      let woman = {} as Clothwoman
      for(let docs of querySnap){
        woman.name = docs.name
        woman.price = docs.price
        woman.size = docs.size
        woman.image = docs.image
        woman.color = docs.color
        this.womanList.push({...woman})
      }
    })
  }


  addToCart(woman: {}){
    this.cartStorage = JSON.parse(localStorage.getItem("cartStorage") || "[]")
    this.cartStorage.push(woman)
    localStorage.setItem("cartStorage", JSON.stringify(this.cartStorage))
    console.log(this.cartStorage)
  }
}
