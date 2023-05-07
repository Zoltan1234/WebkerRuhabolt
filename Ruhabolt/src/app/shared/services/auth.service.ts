import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(email: string, pw: string) {
    return this.auth.signInWithEmailAndPassword(email, pw)
  }

  registration(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email,password)
  }

  isUserLoggedIn(){
    return this.auth.user
  }

  logout(){
    return this.auth.signOut()
  }
}
