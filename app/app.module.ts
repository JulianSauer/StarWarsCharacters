import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CharacterListComponent} from "./character-list.component";
import {CharacterDetailsComponent} from "./character-details.component";
import {AppRoutesModule} from "./app-routes.module";

@NgModule({
  imports: [BrowserModule, AppRoutesModule],
  declarations: [AppComponent, CharacterListComponent, CharacterDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
