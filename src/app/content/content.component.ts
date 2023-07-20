import { Component, OnInit } from '@angular/core';
import { HttpProvider } from '../httpProvider.service';
@Component({
  selector: 'content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {
  public loadedArrayOfContent: any = [];
  constructor(private httpProvider: HttpProvider) { }
  ngOnInit(): void {
    this.httpProvider.getAll().subscribe((data) => {
      var result = data.body;
      if (result) {
        this.loadedArrayOfContent = result;
      }
      else this.loadedArrayOfContent = "404";
    })
  }
}
