import {Component, Input, OnInit, OnDestroy} from "@angular/core";
import {Person} from "./person";
import {ActivatedRoute, Router} from "@angular/router";
import {PeopleService} from "./people.service";

@Component({
  selector: 'person-details',
  templateUrl: 'app/person-detail.component.html',
  styleUrls: ['app/person-detail.component.css']
})
export class PersonDetailsComponent implements OnInit, OnDestroy {

  subscribe: any;

  constructor(private peopleService: PeopleService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.subscribe = this.activatedRoute.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.selectedPerson = this.peopleService.get(id);
    })
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  @Input()
  selectedPerson: Person;

  backToCharacterList() {
    let link = ['/characters'];
    this.router.navigate(link);
  }

}
