import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

import { Clothman } from '../models/Clothman';

@Injectable({
  providedIn: 'root'
})
export class ManService {

  collectionName = "ManClothes"


  constructor(private firestore: AngularFirestore ) {

  }

  findAll(orderBy: string){
    return this.firestore.collection<Clothman>(this.collectionName, ref => ref.orderBy(orderBy)).valueChanges()
   }

}
