
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatasService } from 'src/app/services/datas.service';
import { Properties } from './../models/properties.model';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SharecartcountService } from './../services/sharecartcount.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent /*implements OnInit*/ {
  productAddedTocart:Properties[]=[];
  TotalAmount:number;
  //display=true;
  //table = false;
  Cartcount:any;//number
  dataSource: MatTableDataSource<Properties>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['delete_icon','img', 'name', 'price', 'quantity'];

constructor(private dataservice:DatasService,
            private _snackBar: MatSnackBar,
            private sharecartcount:SharecartcountService) { 
  this.dataservice.GetCartItem().subscribe(data => {
    this.productAddedTocart = data;
    this.dataSource = new MatTableDataSource<Properties>(this.productAddedTocart);
    this.CalculateTotalAmount(this.productAddedTocart);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    }, 0);
  })    
}

CalculateTotalAmount(Items:Properties[]){
  let total=0;
  for (let i in Items){
    total=total+(Items[i].quantity * Items[i].price);
  }
  this.TotalAmount=total;

}

Addquantity(CartItem:Properties){
    this.dataservice.GetCartItem().subscribe(data=>{
      this.productAddedTocart=data;
      this.productAddedTocart.find(p=>p.id==CartItem.id).quantity=++CartItem.quantity;
      this.dataservice.AddTocart(this.productAddedTocart);
      this.CalculateTotalAmount(this.productAddedTocart);
    })
}
Removequantity(CartItem:Properties){
  this.dataservice.GetCartItem().subscribe(data=>{
    this.productAddedTocart=data;
    this.productAddedTocart.find(p=>p.id==CartItem.id).quantity=--CartItem.quantity;
    this.dataservice.AddTocart(this.productAddedTocart);
    this.CalculateTotalAmount(this.productAddedTocart);
  })
}


 /* ngOnInit() 
  {
    this.productAddedTocart=this.dataservice.getProductFromCart();
      this.dataSource = new MatTableDataSource<Properties>(this.productAddedTocart);
      //this.display=false;
     // this.table=true;
     
  }

  /*onRemove(id)
  {
    var index = this.productAddedTocart.findIndex(x=>x.id===id);
    this.productAddedTocart.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(this.productAddedTocart));
    this.openSnackBar("Item removed successfully");
  }*/
  onRemove(index: number, e){
   
      const data = this.dataSource.data;
      data.splice( index, 1);
      //localStorage.setItem('cart',JSON.stringify(this.productAddedTocart));
      this.dataSource.data = data;
       this.openSnackBar("Item removed successfully");
       this.dataservice.DeleteCart(e._id).subscribe();
       this.Cartcount=(this.productAddedTocart.length);
       localStorage.setItem('cartlength',this.Cartcount)
       this.sharecartcount.updateCartCount(this.Cartcount);
    
  }

  openSnackBar(message: string) 
  {
      this._snackBar.open(message, 'close', 
      {
      duration: 2000,
      });
  }

}
