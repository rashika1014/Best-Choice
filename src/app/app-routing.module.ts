import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./Components/products/products.module').then(m => m.ProductsModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./Components/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./Components/cart/cart.module').then(m => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
