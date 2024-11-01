import { Component, OnInit } from '@angular/core';
import { HttpProvider } from '../services/httpProvider.service';
import { State } from '../modules/ContentTemplateStatesEnum';
class User {
  constructor(
    public Name: string,
    public Surname: string,
    public Id: string,
    public Age: number
  ) { }
}
@Component({
  selector: 'content',
  templateUrl: './content.component.html',
})
export class contentComponent implements OnInit {
  constructor(private httpProvider: HttpProvider) { }
  ngOnInit(): void {
    this.getFullList();

  }
  //TODO handle all errors/exceptions
  //#region common variables
  public loadedUsersArray: User[] = []
  public loadedUserObject;
  public StateEnum = State;
  public state;
  public maxSize = 5;
  public page = 1;
  public countOfRecords = 5;
  public searchInputValue = "";
  //#endregion
  //#region form variables
  user: User = new User("", "", "", 0);
  //#endregion
  //TODO split CRUD and other functions to different services out of there component
  private getFullList() {
    this.httpProvider.getAll().subscribe((data) => {
      var result = data.body;
      if (result) {
        this.loadedUsersArray = result;
        console.log("Array of users size= " + this.loadedUsersArray.length);
        this.state = State.fullUsersListRequested
      }
    })
  }
  private getUserById(model: User) {
    this.httpProvider.getById(model).subscribe((data) => {
      var result = data.body;
      console.log(result)
      if (result) {
        //this.fullListRequestedFalse();
        this.state = State.oneOfUsersRequestedForPUT;
        this.user = result;
        console.log(this.user);
      }
      else {
        this.loadedUserObject = 'Something went SOAD';
      }
    })
  }
  private deleteById(model: User) {
    //console.log(model);
    console.log(model);
    if (confirm("Are you sure to delete user with id " + model)) {
      this.httpProvider.deleteById(model).subscribe((data) => {
        alert("Done!")
        this.getFullList();
      })
    }
  }
  private sendUser(model: User) {
    if (this.state == this.StateEnum.oneOfUsersRequestedForPUT) {
      if (confirm("Are you sure to update current user")) {
        this.httpProvider.save(model).subscribe((data) => {
          alert("Done!");
          this.getFullList();
          this.user = new User("", "", "", 0);
        })
      }
    }
    if (this.state == this.StateEnum.noUserRequestedCausePost) {
      if (confirm("Are you sure to create new user")) {
        this.httpProvider.create(model).subscribe((data) => {
          alert("Done!");
          this.getFullList();
          this.user = new User("", "", "", 0);
        })
      }
    }
  }
  getCurrentPage(page: number): void {
    this.page = page;
    console.log("page:" + page)
  }
}
