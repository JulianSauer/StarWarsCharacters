import {Component, Input, OnInit, OnDestroy} from "@angular/core";
import {Character} from "./character";
import {ActivatedRoute, Router} from "@angular/router";
import {CharacterService} from "./character.service";

@Component({
  selector: 'character-details',
  templateUrl: 'app/character-detail.component.html',
  styleUrls: ['app/character-detail.component.css']
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {

  subscribe: any;

  constructor(private characterService: CharacterService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.subscribe = this.activatedRoute.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.selectedCharacter = this.characterService.get(id);
    })
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  @Input()
  selectedCharacter: Character;

  backToCharacterList() {
    let link = ['/characters'];
    this.router.navigate(link);
  }

  saveCharacterDetails() {
    this.characterService.save(this.selectedCharacter);
    let link = ['/characters'];
    this.router.navigate(link);
    //alert(`Saved values for ${this.selectedCharacter.name}.`)
  }

}
