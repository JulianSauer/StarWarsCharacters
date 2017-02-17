import {Character} from "./character";

export class CharacterService {

  private people: Character[] = [
    {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
    {id: 2, name: 'Darth Vader', height: 200, weight: 100},
    {id: 3, name: 'Han Solo', height: 185, weight: 85},
  ];

  get(id: number): Character {
    return this.people.find(character => character.id === id);
  }

  getAll(): Character[] {
    return this.people;
  }

}
