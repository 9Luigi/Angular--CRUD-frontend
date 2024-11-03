import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root' //let all modules use this service
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
      observe: 'response' as 'body' //tells that observable that returns will contain only body without headers, response codes
    };
    console.log(httpOptions);
    return this.httpClient.get(url, httpOptions).pipe(map((response: any) => this.ReturnResponseData(response)), catchError(this.handleError));
  }
  post(url: string, model: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
    }
    return this.httpClient.post(url, model, httpOptions).pipe(map((response: any) => this.ReturnResponseData(response)), catchError(this.handleError));
  }
  delete(url: string, model: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
    };
    return this.httpClient.delete(url, httpOptions).pipe(map((response: any) => this.ReturnResponseData(response)), catchError(this.handleError));
  }
  put(url: string, model: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
    };
    return this.httpClient.put(url, model, httpOptions).pipe(map((response: any) => this.ReturnResponseData(response)), catchError(this.handleError));
  }
  private ReturnResponseData(response: any) { //future response handle
    return response;
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`; //front error
    }else{
      errorMessage = `Error code: ${error.status}, ` + `message: ${error.message}`; //back error
    }
      console.log('Error!:', errorMessage);
      return throwError(() => errorMessage);
  }
}
