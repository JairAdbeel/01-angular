import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
  constructor(
    private dbzService: DbzService
  ) {  }

  get characters(): Character[] {
    //La siguiente línea muestra una copia del objeto original,
    //para no interferir directamente con el objeto principal
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  addNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }
}
