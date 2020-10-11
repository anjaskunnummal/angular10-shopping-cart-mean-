import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Checkout } from '../models/checkout.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  endpoint: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

constructor(private http: HttpClient) { }

AddCheckout(data:Checkout):Observable<any>{
  let API_URL = `${this.endpoint}/add-checkout`;
  return this.http.post(API_URL,data);
}
GetCheckout():Observable<Checkout[]>{
  return this.http.get<Checkout[]>(`${this.endpoint}/get-address`)
}
}
