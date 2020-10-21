import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public fb: FormBuilder, 
    private http: HttpClient, 
    private router: Router,
    private location: Location
    ) {

    this.form = this.fb.group({
      productName: [''],
      price: [],
      dateTime: [''],
    });

  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.form.value);
    this.http.post('http://localhost:8100/product/create', this.form.value).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
        this.router.navigate(['/products']);
      },
      (error) => console.log(error)
    );
  }
  goBack(): void {
    this.location.back();
  }

}
