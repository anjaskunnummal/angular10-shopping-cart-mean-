import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {MatSnackBar} from'@angular/material/snack-bar'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email='';
password='';
  constructor(private authservice: AuthService, 
              private router: Router,
              private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  signWithGoogle(){
    this.authservice.loginWithGoogle().then(()=>{
      this.router.navigate(['/home']);
      this.opensnackbar("Welcome to ShopDo,Enjoy your Purchase");
    });
  }
  Login(){
    this.authservice.login(this.email,this.password).then(()=>{
      this.router.navigate(['/home']);
      this.opensnackbar("Welcome to Shopdo")
    }).catch(_error => {
      console.log(_error)
      this.opensnackbar("Invalid Email or Password");
      this.router.navigate(['/login'])
    })
  
}

  

  opensnackbar(message:string){
    this._snackbar.open(message,'close',{
      duration:2000,
    })
  }
}
