import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  productList: any[];
  constructor(private api: ApiService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.getproducts();
  }

  public getproducts() {
    this.api.getProducts().subscribe((products) => {
      this.productList = products['data'];
    })
  }

  handleAddToCart(product) {
    product.quantity = 1;
    this;
    this.api.checkProductToCart(product).subscribe((arg) => {
      if (arg.isExist) {
        this.api.updateProductToCart(arg.product).subscribe(response => {
          if (response) {
            this.toastr.success('Prduct updated in cart');
            this.api.getCartItems();
          }
        });
      } else {
        this.api.addProductToCart(arg.product).subscribe(response => {
          if (response) {
            this.toastr.success('Prduct added in cart');
            this.api.getCartItems();
          }
        });
      }
    },
      err => {
        this.toastr.error('Could not update');
      }
    );
  }
}
