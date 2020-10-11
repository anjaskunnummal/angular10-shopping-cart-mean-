import { Component, NgZone, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { CheckoutService } from './../services/checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutform:FormGroup;
  display=false;
  show=true;

  constructor(private fb:FormBuilder,
              private checkoutservice:CheckoutService,
              private ngZone:NgZone,
              private router:Router) { }

  ngOnInit(): void {
    this.submitForm();
  }
  submitForm(){
    this.checkoutform = this.fb.group({
     first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      house_name:['',[Validators.required]],
      pincode:['',[Validators.required]],
      correct_location:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      phone_number:['',[Validators.required,Validators.maxLength(10)]]

    })
  }

  public handleError= (controlName:string,errorName:string)=>{
    return this.checkoutform.controls[controlName].hasError(errorName)
  }

  SubmitCheckoutForm(){
    if(this.checkoutform.valid){
      this.display=true;
      this.show=false;
      console.log(this.checkoutform.value)
        this.checkoutservice.AddCheckout(this.checkoutform.value).subscribe(res=>{
        this.ngZone.run(()=>{
          this.router.navigateByUrl('/checkout')
        })
      })
    }

  }

}
