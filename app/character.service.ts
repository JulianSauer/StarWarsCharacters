import {Character} from "./character";
import {Injectable} from "@angular/core";

@Injectable()
export class CharacterService {

  private characters: Character[] = [
    {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
    {id: 2, name: 'Darth Vader', height: 200, weight: 100},
    {id: 3, name: 'Han Solo', height: 185, weight: 85},
  ];

  get(id: number): Character {
    return this.clone(this.characters.find(character => character.id === id));
  }

  getAll(): Character[] {
    return this.characters;
  }

  save(character: Character) {
    let originalCharacter = this.characters.find(c => c.id === character.id);
    if (originalCharacter) Object.assign(originalCharacter, character);
  }

  private clone(object: any) {
    return JSON.parse(JSON.stringify(object));
  }

}
