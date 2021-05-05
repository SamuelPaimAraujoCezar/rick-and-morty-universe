import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Character } from './../../../shared/models/character';
import { SearchParams } from './../../../shared/models/search-params';
import { ConfigParamsService } from './../../../shared/services/config-params.service';
import { IReponseService, RESPONSE_SERVICE } from './../../../shared/interfaces/reponse-service';

@Injectable()
export class CharacterService {

  private url = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient, private configParamsService: ConfigParamsService, 
              @Inject(RESPONSE_SERVICE) private responseService: IReponseService) { }

  getCharacters(search: SearchParams): Observable<Character[]> {
    const searchParams = this.configParamsService.setCharacterSearchParams(search);
    return this.http.get<any>(this.url, { params: searchParams })
      .pipe(map(response => this.responseService.responseToCharacters(response)));
  }

  getCharactersByIds(ids: string): Observable<Character[]> {
    return this.http.get<any>(`${this.url}/${ids}`)
      .pipe(map(response => this.responseService.responseToCharacters(response)));
  }
  
  getCharacterById(id: number): Observable<Character> {
    return this.http.get<any>(`${this.url}/${id}`)
      .pipe(map(response => this.responseService.responseToDetailedCharacter(response)));
  }
}
