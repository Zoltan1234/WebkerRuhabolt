import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Clothman } from 'src/app/shared/models/Clothman';
import { User } from 'src/app/shared/models/User';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';
import { ManService } from 'src/app/shared/services/clothman.service';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss']
})
export class ManComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem("user") || "[]")
  manList: any
  cartStorage: any

  constructor(private manService: ManService, private snackBar: MatSnackBar, private numToHuf: PricePipe) { }

  ngOnInit(): void {
    this.listMans()
  }

  openSnackBar() {
    this.snackBar.open("Hozzáadva a kosárhoz", "Ok");
  }

  listMans() {
    this.manService.findAll("price").subscribe((querySnap) => {
      this.manList = []
      let man = {} as Clothman
      for(let docs of querySnap){
        man.name = docs.name
        man.color = docs.color
        man.price = docs.price
        man.size = docs.size
        man.image = docs.image
        this.manList.push({...man})
        console.log(this.manList)
      }
    })
  }


  addToCart(man: {}){
    this.cartStorage = JSON.parse(localStorage.getItem("cartStorage") || "[]")
    this.cartStorage.push(man)
    localStorage.setItem("cartStorage", JSON.stringify(this.cartStorage))
    console.log(this.cartStorage)
  }
}
