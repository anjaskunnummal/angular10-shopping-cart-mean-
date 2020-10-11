import { Component, OnInit } from '@angular/core';
import { DatasService } from 'src/app/services/datas.service';

@Component({
  selector: 'app-fashions',
  templateUrl: './fashions.component.html',
  styleUrls: ['./fashions.component.scss']
})
export class FashionsComponent implements OnInit {

  products:any;
  constructor(private dataservice:DatasService){ }
  ngOnInit() {
   this.dataservice.GetFashion()
     .subscribe(
       data=> {
       this.products = data
      });
   
    }
}
