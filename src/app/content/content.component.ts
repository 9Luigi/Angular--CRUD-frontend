import { Component, OnInit } from '@angular/core';
import { HttpProvider } from '../httpProvider.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {
  public loadedArrayOfContent: any = [];
  constructor(private http: HttpClient, private httpProvider: HttpProvider) { }
  ngOnInit(): void {
    this.httpProvider.getAll().subscribe((data) => {
      var result = data.body;
      console.log(data);
      console.log(data.body);
      if (result) {
        this.loadedArrayOfContent = result;
      }
      else this.loadedArrayOfContent = "something went SOAD";
    })

  }
}
