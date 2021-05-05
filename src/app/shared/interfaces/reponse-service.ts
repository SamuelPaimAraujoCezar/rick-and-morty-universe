import { Episode } from './../models/episode';
import { Location } from './../models/location';
import { Character } from './../models/character';
import { InjectionToken } from '@angular/core';

export interface IReponseService {
    responseToCharacters(response: any): Character[];
    responseToDetailedCharacter(response: any): Character;
    responseToDetailedLocation(response: any): Location;
    responseToLocation(response: any): Location;
    responseToEpisodes(response: any): Episode[];
    responseToDetailedEpisode(response: any): Episode
}

export const RESPONSE_SERVICE: InjectionToken<IReponseService> = new InjectionToken<IReponseService>('RESPONSE_SERVICE');
