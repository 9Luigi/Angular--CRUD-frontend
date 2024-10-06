import { Component, OnInit } from '@angular/core';
import { HttpProvider } from '../httpProvider.service';
@Component({
  selector: 'content',
  templateUrl: './content.component.html'
})
export class contentComponent implements OnInit {
  constructor(private httpProvider: HttpProvider) { }
  ngOnInit(): void {
    this.getFullList();
  }
  //TODO handle all errors/exceptions
  //#region variables
  public fullListRequested: boolean = true;
  public loadedUsersArray: any = []
  public loadedUserObject: any;
  public name: string;
  public age: number;
  //#endregion
  //TODO split CRUD and other functions to different services out of there component
  private getFullList() {
    this.httpProvider.getAll().subscribe((data) => {
      var result = data.body;
      console.log(data);
      console.log(data.body);

      if (result) {
        this.loadedUsersArray = result;
        this.fullListRequestedTrue();
      }
      else {
        this.loadedUsersArray = 'Something went SOAD';
      }
    })
  }
  private getUserById(model: any) {
    this.httpProvider.getById(model).subscribe((data) => {
      var result = data.body;
      console.log(result)
      if (result) {
        this.fullListRequestedFalse();
        this.loadedUserObject = result;
      }
      else {
        this.loadedUserObject = 'Something went SOAD';
      }
    })
  }
  private deleteById(model: any) {
    //console.log(model);
    console.log(model);
    if (confirm("Are you sure to delete user with id " + model)) {
      this.httpProvider.deleteById(model).subscribe((data) => {
        alert("Done!")
        this.getFullList();
      })
    }
  }
  private fullListRequestedFalse() {
    this.fullListRequested = false;
  }
  private fullListRequestedTrue() {
    this.fullListRequested = true;
  }
}
