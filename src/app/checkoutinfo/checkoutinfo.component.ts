import { Component, OnInit } from '@angular/core';
import { Checkout } from '../models/checkout.model';
import { DatasService } from '../services/datas.service';
import { Properties } from './../models/properties.model';
import { CheckoutService } from './../services/checkout.service';

@Component({
  selector: 'app-checkoutinfo',
  templateUrl: './checkoutinfo.component.html',
  styleUrls: ['./checkoutinfo.component.css']
})
export class CheckoutinfoComponent implements OnInit {
  productfromcart:Properties[];
  AddressArray:Checkout[];

  constructor(private dataservice:DatasService,
              private checkoutservice:CheckoutService) { }

  ngOnInit(): void {
    this.dataservice.GetCartItem().subscribe(data=>{
      this.productfromcart=data;
    })
    this.checkoutservice.GetCheckout().subscribe(res=>{
      this.AddressArray=res;
    })
  }
 

}
