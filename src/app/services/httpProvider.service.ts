import { Injectable } from '@angular/core';
import { WebApi } from './webApi.service';
import { Observable } from 'rxjs';

var apiUrl = "https://localhost:44303"; //backend
var httpLink = { //object with fields for all CRUD operations
  getAll: apiUrl + "/",
  deleteById: apiUrl + "/api/users/",
  getById: apiUrl + "/api/users/",
  save: apiUrl + "/api/users/",
  create: apiUrl + "/api/users/",
}

@Injectable({
  providedIn: 'root' //inject service in main module for all components
})
export class HttpProvider {
  constructor(private webApiService: WebApi) { } //inject service

  public getAll(): Observable<any> {
    return this.webApiService.get(httpLink.getAll);
  }
  public deleteById(model: any): Observable<any> {
    console.log(httpLink.deleteById + model);
    return this.webApiService.delete(httpLink.deleteById + model, "");
  }
  public getById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getById + model);
  }
  public save(model: any): Observable<any> {
    return this.webApiService.put(httpLink.save, model);
  }
  public create(model:any):Observable<any>{
    return this.webApiService.post(httpLink.create, model)
  }
}

