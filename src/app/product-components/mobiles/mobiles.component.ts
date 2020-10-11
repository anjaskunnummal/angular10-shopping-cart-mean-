import {AfterViewInit, Component, OnInit, ViewChild,Input,Output,EventEmitter,NgZone} from '@angular/core';
import { DatasService } from 'src/app/services/datas.service';
import { Properties,serverResponse } from './../../models/properties.model';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {map} from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from './../../services/cart.service';
import { SharecartcountService } from './../../services/sharecartcount.service';

declare let $: any;

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {
  productAddedTocart:Properties[];
  Cartcount:any=0;//number
  dd:any;
  products:serverResponse[];


  constructor(private dataservice:DatasService,
              private route: ActivatedRoute,
              private cartService: CartService,
              private _snackBar: MatSnackBar,
              private ngZone: NgZone,
              private sharecartcount:SharecartcountService,
              private actRoute: ActivatedRoute,
              private router:Router){ }
  ngOnInit() {
   this.dataservice.GetProperties()
     .subscribe(
       data=> {
       this.products = data
      });
   
    }
    OnAddCart(product:Properties)
    {
      console.log(product);
      
     // this.productAddedTocart=this.dataservice.getProductFromCart();
     this.dataservice.GetCartItem().subscribe(
       data => {
         this.productAddedTocart=data;
         if (this.productAddedTocart==null){
           this.productAddedTocart=[];
           this.productAddedTocart.push(product);
           this.dataservice.AddTocart(this.productAddedTocart).subscribe(res => {
            this.ngZone.run(() => this.router.navigateByUrl('/mobiles'))
          });
          this.openSnackBar('added to cart successfully');
          //this.router.navigate['/mobiles'];
        }
          else{
            let tempProduct=this.productAddedTocart.find(p=>p.id==product.id);
            if(tempProduct==null)
            {
              this.productAddedTocart.push(product);
              this.dataservice.AddTocart(this.productAddedTocart).subscribe(res => {
                this.ngZone.run(() => this.router.navigateByUrl('/mobiles'))
              });
              this.openSnackBar('added to cart successsfully');
            //  this.router.navigate(['/mobiles']);
            }
            else
            { 
              this.openSnackBar('already added,check your cart');
              this.router.navigate(['/mobiles']);
            }  
  
          }
          this.Cartcount=(this.productAddedTocart.length);
          localStorage.setItem('cartlength',this.Cartcount)
          this.sharecartcount.updateCartCount(this.Cartcount);

         
       
       })

     /* if(this.productAddedTocart==null)
      {
        this.productAddedTocart=[];
        this.productAddedTocart.push(product);
        this.dataservice.addProductToCart(this.productAddedTocart);
        this.dataservice.AddTocart(this.productAddedTocart).subscribe(res => {
          this.ngZone.run(() => this.router.navigateByUrl('/mobiles'))
        });
        this.openSnackBar('added to cart successsfully');
        this.router.navigate(['/mobiles']);
      }

      
      else{
        let tempProduct=this.productAddedTocart.find(p=>p.id==product.id);
        if(tempProduct==null)
        {
          this.productAddedTocart.push(product);
          this.dataservice.addProductToCart(this.productAddedTocart);
          this.dataservice.AddTocart(this.productAddedTocart).subscribe(res => {
            this.ngZone.run(() => this.router.navigateByUrl('/mobiles'))
          });
          this.openSnackBar('added to cart successsfully');
          this.router.navigate(['/mobiles']);
        }
        else
        { 
          this.openSnackBar('already added,check your cart');
          this.router.navigate(['/mobiles']);
        }   
      }*/

   
    }
 openSnackBar(message: string) {
      this._snackBar.open(message, 'close', {
        duration: 2000,
      });
    }
  
}
