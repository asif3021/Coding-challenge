import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
// import { PRODUCTS } from './mock-products';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // URL to web api
    private productApiUrl = 'http://localhost:8100/product/list'; 

  constructor( private http: HttpClient ) { }

  /** GET products from the server */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productApiUrl)
    .pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console instead
  
      return of(result as T);
    };
  }

    /** GET product by id. Will 404 if id not found */
    getProduct(id: number): Observable<Product> {
      const url = `${this.productApiUrl}/${id}`;
      return this.http.get<Product>(url).pipe(
        catchError(this.handleError<Product>(`getProduct id=${id}`))
      );
    }

}
