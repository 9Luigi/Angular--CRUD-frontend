import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { contentComponent } from "./content/content.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {NgbdPaginationAdvanced} from './modules/NgbdPaginationAdvanced';

import { HttpProvider } from '../app/services/httpProvider.service';
import { WebApi } from "./services/webApi.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableFilterPipe} from './pipes/table-filter-pipe.pipe';
// const routes: Routes = [
//     { path: '', redirectTo: 'Home', pathMatch: 'full' } //TODO maybe should use regex if it's posible
// ]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, NgbModule, NgbdPaginationAdvanced],
    declarations: [contentComponent, HeaderComponent, FooterComponent, TableFilterPipe],
    bootstrap: [contentComponent, HeaderComponent, FooterComponent],
    providers: [HttpProvider, WebApi]
})
export class AppModule { }