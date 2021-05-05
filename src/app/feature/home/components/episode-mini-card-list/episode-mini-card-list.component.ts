import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Episode } from './../../../../shared/models/episode';

@Component({
  selector: 'rma-episode-mini-card-list',
  templateUrl: './episode-mini-card-list.component.html',
  styleUrls: ['./episode-mini-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodeMiniCardListComponent {

  @Input() episodes: Episode[];
  @Output() openEpisodeInfo = new EventEmitter();

  constructor() { }

  redirectToEpisode(id: number) {
    this.openEpisodeInfo.emit({ id: id });
  }

}
