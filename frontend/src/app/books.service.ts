import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _http: HttpClient) { }

  getBooks(): Observable<any> {
    return this._http.get('http://localhost:3000/api/books').pipe(
      map(this.extractData));
  }

  removeBook(book) : Observable<any> {
    return this._http.delete(
      'http://localhost:3000/api/book?Id='+book._id
    ).pipe(
      catchError(this.handleError)
    );
  }

  saveBook(book) : Observable<any> {
    var endPoint = 'http://localhost:3000/api/book';
    if(book._id = 0) {
      return this._http.post(endPoint, book);
    }
    else {
      return this._http.put(endPoint, book);
    }
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err);
  }

}
