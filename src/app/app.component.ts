import { Component,OnInit,ViewChild,HostListener,AfterViewInit } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { DatasService } from './services/datas.service';
import { Properties } from './models/properties.model';
import { MobilesComponent } from './product-components/mobiles/mobiles.component';
import { SharecartcountService } from './services/sharecartcount.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*demo='WELCOME';
  products:any;
  constructor(private dataservice:DatasService){ }
  ngOnInit() {
   this.dataservice.GetProperties()
     .subscribe(
       data=> {
       this.products = data
      });
   }*/
   constructor(private dataservice:DatasService,
               private sharecartcountservice:SharecartcountService,
               public authservice:AuthService,
               private router:Router ){ }
   /*cartcount:any;
     itemtot:any;*/
  display=false;
  close_icon=false;
   opened = true;
   nav_icon=true;
   search_icon=true;
   cartcount:any;//number
   cartLength:Properties[];
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  control = new FormControl();
  Values: any[];
 SearchValues: Observable<string[]>;

  ngOnInit() {
    this.sharecartcountservice.currentMessage.subscribe(msg => this.cartcount = msg);
    /*this.dataservice.GetCartItem().subscribe(
      data=>{
          this.cartLength=data;
          this.cartcount=this.cartLength.length;
      }
    );*/
    //this.cartLength=this.dataservice.getProductFromCart();
    //this.cartcount=this.cartLength.length;
    /*this.cartcount=this.dataservice.getProductFromCart();
    for (let i in this.cartcount) {
      this.cartcount[i].Quantity=1;
   }
   this.dataservice.addProductToCart(this.cartcount);
   this.itemtotal(this.cartcount);*/
     

    console.log(window.innerWidth)
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }

    
    this.Values=[{name:"please fill the input filed as you like"},
    {name:"start your shopping from here!!"},
    {name:"Enjoy yourself by exploring our products"},
    {name:"do you want to earn??Let's start your purchase"},
    {name:"ccccccccccccccccccccccccccccc"},
    {name:"ddddddddddddds"},
    {name:"ffffffffffffffffffffffffffffffff"},
    {name:"gggggggggggggggggggggg"}]
    this.SearchValues = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.Values.filter(Values => this._normalizeValue(Values.name).includes(filterValue));
  }
  
  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
 
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
  searching(){
    this.display=!this.display;
    this.nav_icon=false;
    this.close_icon=true;
    this.search_icon=false;
    if(this.display==false){
      this.nav_icon=true;
    }

  }
  close(){
    this.display=!this.display;
    this.search_icon=true;
    this.close_icon=false;
    this.nav_icon=true;
  }
  
     
  /* itemtotal(itemtot:Properties[]){
    let total=0;
    for(let i in itemtot){
      total=total+(itemtot[i].quantity)
    }
    this.itemtot=total;
  }*/
 
  
}
