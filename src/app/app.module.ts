import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {NgbdPaginationAdvanced} from './modules/NgbdPaginationAdvanced';

import { HttpProvider } from '../app/services/httpProvider.service';
import { WebApi } from "./services/webApi.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableFilterPipe} from './pipes/table-filter.pipe';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
// const routes: Routes = [
//     { path: '', redirectTo: 'Home', pathMatch: 'full' } //TODO maybe should use regex if it's posible
// ]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, NgbModule, NgbdPaginationAdvanced],
    declarations: [ContentComponent, HeaderComponent, FooterComponent, TableFilterPipe, LoadingScreenComponent],
    bootstrap: [ContentComponent, HeaderComponent, FooterComponent],
    providers: [HttpProvider, WebApi]
})
export class AppModule { }