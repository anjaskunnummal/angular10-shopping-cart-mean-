import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  constructor() { }
  productImages:any=[{
    name:"Mobiles",
    image:"https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    routerLink: ['/mobiles-list']
  },
{
   name:"Fashion",
   image:"https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   routerLink: ['/fashions-list']
},
{
name:"Electronics",
image:"https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
routerLink: ['/mobiles-list']
},
{
  name:"Appliances",
  image:"https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  routerLink: ['/mobiles-list']
  },
  {
    name:"Sports",
    image:"https://images.pexels.com/photos/102448/pexels-photo-102448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    routerLink: ['/mobiles-list']
    }
]

menitems:any=[{
  name:"Clothing",
  image:"https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

},
{
  name:"Footwear",
  image:"https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

},
{
  name:"Watches",
  image:"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
  name:"View all offers",
  image:"https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}]

  ngOnInit() {
  }

}
