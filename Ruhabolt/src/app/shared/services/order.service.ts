import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Order } from '../models/Order';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {


  collectionName = "Orders"


  constructor(private firestore: AngularFirestore) {

  }

  create(order: Order) {
    return this.firestore.collection<Order>(this.collectionName).doc().set(order)
  }

  findAll(id: string) {
    return this.firestore.collection<Order>(this.collectionName, ref => ref.where("uId", "==", id)).valueChanges().pipe(tap(console.log))
  }

  update() {

  }

  delete(id: string) {
    return this.firestore.collection(this.collectionName, ref => ref.where("id", "==", id)).get().subscribe(docs => {
      docs.forEach(doc => {
        doc.ref.delete()
      })
    })

  }
}
