import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Episode } from './../../../shared/models/episode';
import { IReponseService, RESPONSE_SERVICE } from '../../../shared/interfaces/reponse-service';

@Injectable()
export class EpisodeService {

  url: string = "https://rickandmortyapi.com/api/episode";

  constructor(private http: HttpClient, @Inject(RESPONSE_SERVICE) private responseService: IReponseService) { }

  getEpisodesByIds(ids: string): Observable<Episode[]> {
    return this.http.get<any>(`${this.url}/${ids}`)
      .pipe(map(response => this.responseService.responseToEpisodes(response)));
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<any>(`${this.url}/${id}`)
      .pipe(map(response => this.responseService.responseToDetailedEpisode(response)));
  }
}
