import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Properties, serverResponse} from "../models/properties.model";
import { CartModelServer } from './../models/cart.model';
import { Checkout } from '../models/checkout.model';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  endpoint: string = '';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

constructor(private http: HttpClient) { }
GetProperties():Observable<serverResponse[]> {
  return this.http.get<serverResponse[]>(`${this.endpoint}/mobiles`);
}
/*addProductToCart(cart_items: any) {
  localStorage.setItem("cart", JSON.stringify(cart_items));
}*/
GetFashion():Observable<Properties[]> {
  return this.http.get<Properties[]>(`${this.endpoint}/fashions`);
}
/*getProductFromCart() {
  return JSON.parse(localStorage.getItem("cart"));
}*/
AddTocart(data:Properties[]): Observable<any> {
  let API_URL = `${this.endpoint}/add-cart`;
  return this.http.post(API_URL, data);
 
}
GetCartItem():Observable<Properties[]> {
  return this.http.get<Properties[]>(`${this.endpoint}`);
}
DeleteCart(id): Observable<any> {
  var API_URL = `${this.endpoint}/delete-cartItem/${id}`;
  return this.http.delete(API_URL)
}
GetCartLength():Observable<CartModelServer>{
  return this.http.get<CartModelServer>(`${this.endpoint}/cart-length`);
}
}