import { Injectable } from '@angular/core';
import { WebApi } from './webApi.service';
import { Observable } from 'rxjs';

var apiUrl = "https://localhost:7210";
var httpLink = { //object with fields for all CRUD operations
  getAll: apiUrl + "/api/getall",
  deleteById: apiUrl + "/api/deleteById",
  getById: apiUrl + "/api/getById",
  save: apiUrl + "/api/save",
}

@Injectable({
  providedIn: 'root' //inject service in main module for all components
})
export class HttpProvider {
  constructor(private webApiService: WebApi) { } //inject service

  public getAll(): Observable<any> {
    return this.webApiService.get(httpLink.getAll); //all 4 methods calls webApi 2 base methods(get,post) wich returns observable
  }
  public deleteById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteById + '?id=' + model, "");
  }
  public getById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getById + '?id=' + model);
  }
  public save(model: any): Observable<any> {
    return this.webApiService.post(httpLink.save, model);
  }
}
