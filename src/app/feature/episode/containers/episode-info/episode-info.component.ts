import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Episode } from './../../../../shared/models/episode';
import { Character } from 'src/app/shared/models/character';
import { EpisodeService } from './../../services/episode.service';

@Component({
  selector: 'rma-episode-info',
  templateUrl: './episode-info.component.html',
  styleUrls: ['./episode-info.component.scss']
})
export class EpisodeInfoComponent implements OnInit, OnDestroy {

  episode: Episode;
  episodeCharacters$: Observable<Character[]>;

  id: number = this.activatedRoute.snapshot.params['id'];

  private componentDestroyed$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute, private episodeService: EpisodeService, 
              public router: Router) { }

  ngOnInit(): void {
    this.episodeService.getEpisodeById(this.id)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((episode: Episode) => {
        this.episode = episode;
        this.episodeCharacters$ = episode.characters$;
      }, error => console.log(error));
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  openCharacterInfo(event) {
    this.router.navigate(['characters', event.id]);
  }

}
