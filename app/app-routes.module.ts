import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CharacterListComponent} from "./character-list.component";
import {CharacterDetailsComponent} from "./character-details.component";

const routes: Routes = [
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
  {path: 'characters', component: CharacterListComponent},
  {path: 'character/:id', component: CharacterDetailsComponent}
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
