import { Component, OnInit } from '@angular/core';
import { ViewChild, TemplateRef } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    @ViewChild('readOnlyTemplate', { static: false }) readOnlyTemplate: TemplateRef<any> | undefined;
    @ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any> | undefined;

    editedUser: User | null = null;
    users: User[];
    isNewRecord: boolean = false;
    statusMessage: string = "";


    constructor() { }
}