import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Location } from './../../../shared/models/location';
import { IReponseService, RESPONSE_SERVICE } from '../../../shared/interfaces/reponse-service';

@Injectable()
export class LocationService {

  url: string = "https://rickandmortyapi.com/api/location";

  constructor(private http: HttpClient, @Inject(RESPONSE_SERVICE) private responseService: IReponseService) { }

  getLocationById(id: number): Observable<Location> {
    return this.http.get<any>(`${this.url}/${id}`)
      .pipe(map(response => this.responseService.responseToDetailedLocation(response)));
  }

  getLocationByUrl(url: string): Observable<Location> {
    return this.http.get<any>(url)
      .pipe(map(response => this.responseService.responseToLocation(response)));
  }
}
