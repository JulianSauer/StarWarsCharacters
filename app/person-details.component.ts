import {Component, Input} from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'person-details',
  templateUrl: 'app/person-detail.component.html'
})
export class PersonDetailsComponent {

  @Input()
  selectedPerson: Person;

}
