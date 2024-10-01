import { Component, OnInit } from '@angular/core';
import { HttpProvider } from '../httpProvider.service';
@Component({
  selector: 'content',
  templateUrl: './content.component.html'
})
export class contentComponent implements OnInit {
  public loadedContentArray:any = []
  constructor(private httpProvider:HttpProvider){}
  ngOnInit(): void {
    this.httpProvider.getAll().subscribe((data)=>{
      var result = data.body;
      console.log(data);
      console.log(data.body);
      
      if (result){
      this.loadedContentArray = result;
      }
      else {
        this.loadedContentArray = 'Something went SOAD';
      }
    })
  }
}
