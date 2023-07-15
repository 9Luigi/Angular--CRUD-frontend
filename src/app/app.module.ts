import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router'

import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { HttpProvider } from './httpProvider.service';
import { WebApi } from "./webApi.service";
const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' }

]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [ContentComponent, HeaderComponent, FooterComponent, MainMenuComponent],
    bootstrap: [ContentComponent, HeaderComponent, FooterComponent, MainMenuComponent],
    providers: [HttpProvider, WebApi]
})
export class AppModule { }