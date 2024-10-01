import { Injectable } from '@angular/core';
import { WebApi } from './webApi.service';
import { Observable } from 'rxjs';

var apiUrl = "https://localhost:44303"; //backend
var httpLink = { //object with fields for all CRUD operations
  getAll: apiUrl + "/api/users/getall",
  deleteById: apiUrl + "/api/users/deleteById",
  getById: apiUrl + "/api/users/getUserByID",
  save: apiUrl + "/api/users/add",
}

@Injectable({
  providedIn: 'root' //inject service in main module for all components
})
export class HttpProvider {
  constructor(private webApiService: WebApi) { } //inject service

  public getAll(): Observable<any>{
    return this.webApiService.get(httpLink.getAll);
  }
  public deleteById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteById+'?id',model);
  }
  public getById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getById + '?id=' + model);
  }
  public save(model: any): Observable<any> {
    return this.webApiService.post(httpLink.save, model);
  }
}

