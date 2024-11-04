import { Component, OnInit,  OnDestroy } from '@angular/core';
import { HttpProvider } from '../services/httpProvider.service';
import { State } from '../modules/ContentTemplateStatesEnum';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs';
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
export class contentComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>(); //subject for unsibscribe control
  constructor(private httpProvider: HttpProvider) { }
  ngOnInit(): void {
    this.getFullList();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(); // notify that object destroyed
    this.unsubscribe$.complete(); // Close subject
  }
  //TODO handle all errors/exceptions
  //#region common variables
  public loadedUsersArray: any = []
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
    this.httpProvider.getAll().pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      var result = data.body;
      if (result) {
        this.loadedUsersArray = result;
        console.log("Array of users size= " + this.loadedUsersArray.length);
        this.state = State.fullUsersListRequested
      }
      else {
        this.loadedUsersArray = result = 'Something went SOAD';
      }
    })
  }
  private getUserById(model: any) {
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
  private deleteById(model: any) {
    //console.log(model);
    console.log(model);
    if (confirm("Are you sure to delete user with id " + model)) {
      this.httpProvider.deleteById(model).pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
        alert("Done!")
        this.getFullList();
      })
    }
  }
  private sendUser(model: any) {
    if (this.state == this.StateEnum.oneOfUsersRequestedForPUT) {
      if (confirm("Are you sure to update current user")) {
        this.httpProvider.save(model).pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
          alert("Done!");
          this.getFullList();
        })
      }
    }
    if (this.state == this.StateEnum.noUserRequestedCausePost) {
      if (confirm("Are you sure to create new user")) {
        this.httpProvider.create(model).pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
          alert("Done!");
          this.getFullList();
        })
      }
    }
  }
  getCurrentPage(page: number): void {
    this.page = page;
    console.log("page:" + page)
  }
}
