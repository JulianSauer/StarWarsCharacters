import {Component} from "@angular/core";
import {PeopleService} from "./people.service";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [PeopleService],
})
export class AppComponent {
  title: String = 'Star Wars Characters:';
}
