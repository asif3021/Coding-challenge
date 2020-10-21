import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
// URL to web api
  private usersUrl = 'http://localhost:8200/api/v1/user';  

  constructor( private http: HttpClient ) { }

/** GET users from the server */
getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.usersUrl + '/get/all')
  .pipe(
    catchError(this.handleError<User[]>('getUsers', []))
  );
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); // log to console instead

    return of(result as T);
  };
}

  /** GET user by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/get/${id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  /** DELETE user by id. Will 404 if id not found */
  /*
  deleteUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/delete/${id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }
  
  */

}
