import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cart-item';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0
  constructor(private api: ApiService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.api.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.price)
    })
  }

  updateProductCart(product, qty) {
    this.api.updateProductToCart(product).subscribe(response => {
      if (response) {
        this.toastr.success('Prduct updated in cart');
      }
    });
  }

  removeFromCart(id) {
    this.api.removeFromCart(id).subscribe((response) => {
      this.toastr.success('Prduct removed from cart');      
      this.loadCartItems();
    })
  }

  CheckOut() {
    for (let i in this.cartItems) {
      this.api.removeFromCart(this.cartItems[i].id).subscribe(() => {
        this.loadCartItems();
      })
      this.toastr.success('Thank You for shopping with us !!');
    }
  }


}
