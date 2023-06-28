import { Injectable } from '@angular/core';
import { WebApi } from './webApi.service';
import { Observable } from 'rxjs';

var apiUrl = "";
var httpLink = { //object with fields for all CRUD operations
  getAll: apiUrl + "/api/getAll",
  deleteById: apiUrl + "/api/deleteById",
  getById: apiUrl + "/api/getById",
  save: apiUrl + "/api/save",
}

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  constructor(private webApiService: WebApi) { }

  public getAll(): Observable<any> {
    return this.webApiService.get(httpLink.getAll);
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
