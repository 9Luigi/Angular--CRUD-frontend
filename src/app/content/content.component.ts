import { Component, OnInit } from '@angular/core';
import { HttpProvider } from '../httpProvider.service';
@Component({
  selector: 'content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {
  constructor(private httpProvider: HttpProvider) { }
  ngOnInit(): void {

  }
}
