import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  { path: '', component: CartComponent }
]

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class CartModule { }
