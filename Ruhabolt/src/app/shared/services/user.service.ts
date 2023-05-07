import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { DocumentReference, QuerySnapshot } from '@angular/fire/firestore';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static findById(uid: any) {
    throw new Error('Method not implemented.');
  }

  collectionName = "Users"

  constructor(private firestore: AngularFirestore) { 

  }

  create(user: User){
    return this.firestore.collection<User>(this.collectionName).doc(user.id).set(user)
  }

  findById(id: string){
    return this.firestore.collection<User>(this.collectionName, ref => ref.where("id", "==", id)).valueChanges()
  }


  findAll(){
    return this.firestore.collection<User>(this.collectionName).valueChanges()
  }

  update(){

  }

  delete(){

  }
}
