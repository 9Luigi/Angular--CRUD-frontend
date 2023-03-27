import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ViewChild, TemplateRef } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    @ViewChild('readOnlyTemplate', { static: false }) readOnlyTemplate: TemplateRef<any> | undefined;
    @ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any> | undefined;

    editedUser: User | null = null;
    users: User[];
    isNewRecord: boolean = false;
    statusMessage: string = "";


    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.loadUsers();
    }

    private loadUsers() {
        this.userService.getUsers().subscribe((data: Array<User>) => {
            this.users = data;
            console.log(data);
        });
    }
    addUser() {
        this.editedUser = new User("", "", 0);
        this.users.push(this.editedUser);
        this.isNewRecord = true;
    }
    editUser(user: User) {
        this.editedUser = new User(user.Id, user.Name, user.Age);
    }

    loadTemplate(user: User) {
        if (this.editedUser && this.editedUser.Id === user.Id) {
            return this.editTemplate;
        } return this.readOnlyTemplate;
    }
    saveUser() {
        if (this.isNewRecord) {
            this.userService.createUser(this.editedUser as User).subscribe(_ => {
                this.statusMessage = "Data added succesfull";
                this.loadUsers();
            });
        } else {
            this.userService.updateUser(this.editedUser as User).subscribe(_ => {
                this.statusMessage = "Data updated succesfull";
                this.loadUsers();
            })
            this.editedUser = null;
        }
    }
    cancel() {
        if (this.isNewRecord) {
            this.users.pop();
            this.isNewRecord = false;
        }
        this.editedUser = null;
    }
    deleteUser(user: User) {
        this.userService.deleteUser(user.Id).subscribe(_ => {
            this.statusMessage = "Data deleted succesfull";
            this.loadUsers();
        })
    }
}