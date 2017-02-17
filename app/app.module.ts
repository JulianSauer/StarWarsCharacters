import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {PeopleListComponent} from "./people-list.component";
import {PersonDetailsComponent} from "./person-details.component";
import {AppRoutesModule} from "./app-routes.module";

@NgModule({
  imports: [BrowserModule, AppRoutesModule],
  declarations: [AppComponent, PeopleListComponent, PersonDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
