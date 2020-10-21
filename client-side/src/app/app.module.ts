import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FilterPipe } from './filter.pipe';
import { UserCreateComponent } from './user-create/user-create.component';
import { ProductCreateComponent } from './product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    UserDetailComponent,
    ProductDetailComponent,
    FilterPipe,
    UserCreateComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
