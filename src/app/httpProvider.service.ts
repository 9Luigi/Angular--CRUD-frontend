import { Injectable } from '@angular/core';
import { WebApi } from './webApi.service';
import { Observable } from 'rxjs';

var apiUrl = "";
var httpLink = { //object with fields for all actions with book
  getAllBooks: apiUrl + "/api/book/getAllBooks",
  deleteBookById: apiUrl + "/api/book/deleteBookById",
  getBookById: apiUrl + "/api/book/getBookById",
  saveBook: apiUrl + "/api/book/saveBook",
}

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  constructor(private webApiService: WebApi) { }

  
}
