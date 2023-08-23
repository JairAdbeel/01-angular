import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id   : uuid(),
      name : 'Krilin',
      power: 1000
    },
    {
      id   : uuid(),
      name : 'Goku',
      power: 10000
    },
    {
      id   : uuid(),
      name : 'Vegeta',
      power: 8000
    }
  ];

  onNewCharacter( character: Character ): void {
    //TODO: La siguiente línea teoricamente concatena una propiedad (id) al objeto character
    //primero definir el spread y al final la nueva propiedad
    const newCharacter: Character = {...character, id: uuid()}
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter( index: number ): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
