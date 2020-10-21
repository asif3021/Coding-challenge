import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  form: FormGroup;
  str = "Asif";

  constructor(
    public fb: FormBuilder, 
    private http: HttpClient, 
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }


  submitForm() {
    console.log(this.form.value);
    this.http.post('http://localhost:8100/product/create', this.form.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/products']);
      },
      (error) => console.log(error)
    );
  }

  goBack(): void {
    this.location.back();
  }

}
