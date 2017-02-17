import {Character} from "./character";
import {Component, OnInit} from "@angular/core";
import {CharacterService} from "./character.service";

@Component({
  selector: 'character-list',
  templateUrl: 'app/character-list.component.html',
  styleUrls: ['app/character-list.component.css']
})

export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  selectedCharacter: Character;

  constructor(private peopleService: CharacterService) {
  }

  ngOnInit() {
    this.characters = this.peopleService.getAll();
  }

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
  }

}
