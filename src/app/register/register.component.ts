import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import{MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
email='';
password=''
  constructor(private authservice:AuthService,
              private router:Router,
              private _snackbar:MatSnackBar) { }

  ngOnInit() {
  }
signup(){
  this.authservice.register(this.email,this.password).then(()=>{
    this.router.navigate(['/login']);
    this.opensnackbar("Sign up successfully and Please login");
  }).catch(_error=>{
    console.log(_error);
    this.opensnackbar("Email Is badly formatted");
  })
 
}

opensnackbar(message:string){
  this._snackbar.open(message,'close',{
    duration:2000,
  })
}
}
