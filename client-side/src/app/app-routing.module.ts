import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { ProductCreateComponent } from './product-create/product-create.component';

const routes: Routes = [
  { path : 'users', component: UsersComponent },
  { path : 'products', component: ProductsComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'product-create', component: ProductCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
