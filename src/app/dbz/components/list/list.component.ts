import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   //TODO: this should emit the index number of list.
  //   // console.log('índice:', index);
  //   this.onDelete.emit(index);
  // }

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(id?: string): void {
    if ( !id ) return;
    this.onDeleteById.emit(id);
  }
}
