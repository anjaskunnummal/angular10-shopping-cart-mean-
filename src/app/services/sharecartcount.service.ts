import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DatasService } from 'src/app/services/datas.service';

@Injectable({
  providedIn: 'root'
})
export class SharecartcountService {

  private currentCartCount = new BehaviorSubject(localStorage.getItem('cartlength'));
  currentMessage = this.currentCartCount.asObservable();

  constructor(private dataservice:DatasService) {
   }
   updateCartCount(count:any/*number*/){
    this.currentCartCount.next(count)
  }
}
