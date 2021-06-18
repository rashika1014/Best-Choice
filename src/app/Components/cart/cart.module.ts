import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const route: Routes = [
  { path: '', component: CartComponent }
]

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(route)
  ]
})
export class CartModule { }
