import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../models/character';

@Component({
  selector: 'rma-character-mini-card-list',
  templateUrl: './character-mini-card-list.component.html',
  styleUrls: ['./character-mini-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterMiniCardListComponent {

  @Input() characters: Character[];
  @Output() openCharacterInfo = new EventEmitter();

  constructor() { }

  redirectToCharacter(id: number) {
    this.openCharacterInfo.emit({ id: id });
  }

}
