import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [ContentComponent, HeaderComponent, FooterComponent, MainMenuComponent],
    bootstrap: [ContentComponent, HeaderComponent, FooterComponent, MainMenuComponent],
    providers: []
})
export class AppModule { }