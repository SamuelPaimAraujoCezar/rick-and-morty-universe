import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';

import { Character } from './../../../../shared/models/character';
import { SearchParams } from './../../../../shared/models/search-params';
import { CharacterService } from './../../services/character.service';


@Component({
  selector: 'rma-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {

  search: SearchParams = {
    page: 0
  };
  characters: Character[] = [];
  charactersFilter: FormGroup = new FormGroup({
    name: new FormControl(''),
    status: new FormControl(''),
    gender: new FormControl('')
  });
  allStatus: Array<string> = ['All', 'Alive', 'Dead', 'unknown'];
  allGenders: Array<string> = ['All', 'Male', 'Female', 'Genderless', 'unknown'];

  private componentDestroyed$ = new Subject();

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
    this.charactersFilter.get('name').valueChanges
      .pipe(debounceTime(400), takeUntil(this.componentDestroyed$))
      .subscribe((query: string) => {
        this.search.query = query;
        this.resetCharacters();
      });

    this.charactersFilter.get('status').valueChanges
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value: string) => {
        if (value !== 'All'){
          this.search.field1 = { type: 'status', value: value };
        } else {
          this.search.field1 = null;
        }
        this.resetCharacters();
      });

    this.charactersFilter.get('gender').valueChanges
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value: string) => {
        if (value !== 'All') {
          this.search.field2 = { type: 'gender', value: value };
        } else {
          this.search.field2 = null;
        }
        this.resetCharacters();
      });

    this.loadCharacters();
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  onScroll(): void {
    this.loadCharacters();
  }

  openCharacterInfo(id: number): void {
    this.router.navigateByUrl('/characters/' + id);
  }

  private loadCharacters(): void {
    this.search.page++;
    this.characterService.getCharacters(this.search)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((characters: Character[]) => this.characters.push(...characters), error => console.log(error));
  }

  private resetCharacters(): void {
    this.search.page = 0;
    this.characters = [];
    this.loadCharacters();
  }

}
