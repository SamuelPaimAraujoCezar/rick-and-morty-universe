import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Episode } from './../../../../shared/models/episode';
import { Location } from 'src/app/shared/models/location';
import { Character } from './../../../../shared/models/character';
import { CharacterService } from './../../services/character.service';

@Component({
  selector: 'rma-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit, OnDestroy {

  character: Character;
  characterOrigin: Location;
  characterLocation: Location;
  characterEpisodes$: Observable<Episode[]>;

  id: number = this.activatedRoute.snapshot.params['id'];

  private componentDestroyed$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService, 
              public router: Router) { }

  ngOnInit(): void {
    this.characterService.getCharacterById(this.id)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((character: Character) => {
        this.character = character;
        if (character.origin.name !== 'unknown') {
          character.detailedOrigin$.pipe(takeUntil(this.componentDestroyed$))
            .subscribe((origin: Location) => this.characterOrigin = origin, error => console.log(error));
        }         
        if (character.location.name !== 'unknown') {
        character.detailedLocation$.pipe(takeUntil(this.componentDestroyed$))
          .subscribe((location: Location) => this.characterLocation = location, error => console.log(error));
        }
        this.characterEpisodes$ = character.episodes$;
      }, error => console.log(error));
      
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  openLocationInfo(id?: number) {
    if (id) {
      this.router.navigate(['locations', id]);
    }
  }

  openEpisodeInfo(event) {
      this.router.navigate(['episodes', event.id]);
  }

}
