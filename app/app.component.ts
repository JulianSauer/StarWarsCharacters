import {Component} from "@angular/core";
import {CharacterService} from "./character.service";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [CharacterService],
})
export class AppComponent {
  title: String = 'Star Wars Characters:';
}
