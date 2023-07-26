import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpHeaders, HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebApi {

  constructor(private httpClient: HttpClient) { }

  get(url: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Accept': 'application/json'
      }),
      observe: 'response' as 'body' //TODO get meaning of this
    };
    console.log(httpOptions);
    return this.httpClient.get(url, httpOptions).pipe(map((response) => this.ReturnResponseData(response)), catchError(this.handleError));

  }

  post(url: string, model: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json, charset=utf-8'
      }),

    }
    return this.httpClient.post(url, model, httpOptions).pipe(map((response: any) => this.ReturnResponseData(response)), catchError(this.handleError))
  }

  private ReturnResponseData(response: any) {
    return response;
  }
  private handleError(error: any) {
    return throwError(() => error);
  }
}
