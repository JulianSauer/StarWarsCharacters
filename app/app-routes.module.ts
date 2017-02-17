import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PeopleListComponent} from "./people-list.component";
import {PersonDetailsComponent} from "./person-details.component";

const routes: Routes = [
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
  {path: 'characters', component: PeopleListComponent},
  {path: 'character/:id', component: PersonDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutesModule {
}
