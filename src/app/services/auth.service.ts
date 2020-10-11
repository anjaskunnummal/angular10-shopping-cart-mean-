import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {auth} from'firebase/app';
import {AngularFireAuth} from'@angular/fire/auth';
import {User} from'firebase';
import{MatSnackBar} from'@angular/material/snack-bar'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:User;

constructor(public  afAuth:  AngularFireAuth, 
            public  router:  Router,
            public _snackbar:MatSnackBar) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
 }
 async login(email: string, password: string) {
  var result = await this.afAuth.signInWithEmailAndPassword(email, password)
  /*this.router.navigate(['cart']);*/
}
async register(email: string, password: string) {
  var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
 
}
get isLoggedIn(): boolean {
  const  user  =  JSON.parse(localStorage.getItem('user'));
  return  user  !==  null;
}
async  loginWithGoogle(){
 var result= await  this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  /*this.router.navigate(['cart']);*/
}
get currentUserName(): string {
  return this.user['email']
}
get currentUser(): any {
  return (this.user !== null) ? this.user : null;
}
Logout() {
  this.afAuth.signOut();
  window.alert("Do you want to Loggout?");
  this.opensnackbar("Loggedout successfully");
}

opensnackbar(Message:string){
  this._snackbar.open(Message,'close',{
    duration:4000,
  })
}
}
