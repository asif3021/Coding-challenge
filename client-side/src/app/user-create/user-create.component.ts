import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public fb: FormBuilder, 
    private http: HttpClient, 
    private router: Router,
    private location: Location
    
    ) { 

    this.form = this.fb.group({
      username: [''],
      name: [''],
      role: [''],
      email: ['']
    });
  }


  ngOnInit(): void {
  }


  submitForm() {

    console.log(this.form.value);
    this.http.post('http://localhost:8200/api/v1/user/create', this.form.value).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
        this.router.navigate(['/users']);
      },
      (error) => console.log(error)
    );
  }

  goBack(): void {
    this.location.back();
  }
}
