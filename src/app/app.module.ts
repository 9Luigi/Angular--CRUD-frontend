import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router'

import { contentComponent } from "./content/content.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { MainMenuComponent } from './main-menu/main-menu.component';

import { HttpProvider } from './httpProvider.service';
import { WebApi } from "./webApi.service";
// const routes: Routes = [
//     { path: '', redirectTo: 'Home', pathMatch: 'full' } //TODO maybe should use regex if it's posible
// ]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [contentComponent, HeaderComponent, FooterComponent],
    bootstrap: [contentComponent, HeaderComponent, FooterComponent],
    providers: [HttpProvider, WebApi]
})
export class AppModule { }