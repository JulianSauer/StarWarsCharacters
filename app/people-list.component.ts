import {Person} from "./person";
import {Component, OnInit} from "@angular/core";
import {PeopleService} from "./people.service";

@Component({
  selector: 'people-list',
  templateUrl: 'app/people-list.component.html',
  styleUrls: ['app/people-list.component.css']
})

export class PeopleListComponent implements OnInit {

  people: Person[] = [];
  selectedPerson: Person;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.people = this.peopleService.getAll();
  }

  selectPerson(person: Person) {
    this.selectedPerson = person;
  }

}
