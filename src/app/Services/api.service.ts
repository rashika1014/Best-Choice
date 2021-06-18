import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';
import { cartUrl, productsUrl } from '../config/api';
import { CartItem } from '../models/cart-item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  cartItems: CartItem[] = [];
  constructor(private http: HttpClient) {
    this.getCartItems();
  }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }


  getCartItems(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        this.cartItems=result;

        // for (let item of result) {
        //   let productExists = false

        //   for (let i in this.cartItems) {
        //     if (this.cartItems[i].productId === item.product.id) {
        //       this.cartItems[i].qty++
        //       productExists = true
        //       break;
        //     }
        //   }

        //   if (!productExists) {
        //     this.cartItems.push(new CartItem(item.id, item.product));
        //   }
        // }
        localStorage.setItem('count', String(this.cartItems.length));
        return this.cartItems;
      })
    );
  }

  checkProductToCart(product): Observable<any> {
    var obj = {};
    if (this.cartItems.length > 0) {
      this.cartItems.find((e) => {
        if (e.id == product.id) {
          product.quantity = e['quantity'] + 1;
          obj = { product, isExist: true }
          return of(obj);
        } else {
          obj = { product, isExist: false };
          return of(obj);
        }
       })
    } else {
      obj = { product, isExist: false };
      return of(obj);
    }
    return of(obj);
  }

  addProductToCart(product): Observable<any> {
      return this.http.post(cartUrl, product);
  }

  updateProductToCart(product): Observable<any> {
      return this.http.put(cartUrl+ '/' + product.id, product);
  }

  removeFromCart(productId): Observable<any>{
    return this.http.delete(cartUrl + '/' + productId);
  }
}
