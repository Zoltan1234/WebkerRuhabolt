import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Clothwoman } from '../models/Clothwoman';


@Injectable({
  providedIn: 'root'
})
export class WomanService {

  collectionName = "WomanClothes"


  constructor(private firestore: AngularFirestore ) {

   }

   create(){

   }

   findAll(orderBy: string){
    return this.firestore.collection<Clothwoman>(this.collectionName, ref => ref.orderBy(orderBy)).valueChanges()
   }

   update(){

   }

   delete(){

   }
}
