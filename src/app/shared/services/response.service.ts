import { CharacterService } from './../../feature/home/services/character.service';
import { Injectable, Injector } from '@angular/core';

import { Episode } from './../models/episode';
import { Location } from './../models/location';
import { Character } from './../models/character';
import { EpisodeService } from './../../feature/episode/services/episode.service';
import { LocationService } from './../../feature/location/services/location.service';


@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private injector: Injector) { }

  responseToCharacters(response: any): Character[] {
    let characters: Character[] = [];

    if (response.results) {
      response = response.results;
    }

    if (Array.isArray(response)) {
      for (let i = 0; i < response.length; i++) {
        characters.push({
          id: response[i].id,
          name: response[i].name,
          status: response[i].status,
          species: response[i].species,
          type: response[i].type,
          gender: response[i].gender,
          origin: response[i].origin,
          location: response[i].location,
          image: response[i].image,       
        } as Character)
      }
    } else {
      characters.push({
        id: response.id,
        name: response.name,
        status: response.status,
        species: response.species,
        type: response.type,
        gender: response.gender,
        origin: response.origin,
        location: response.location,
        image: response.image,       
      } as Character)
    }

    return characters;
  }

  responseToDetailedCharacter(response: any): Character {
    const episodeService = this.injector.get(EpisodeService);
    const locationService = this.injector.get(LocationService);

    let episodesIds: string[] = [];

    response.episode.forEach(url => {
      episodesIds.push(url.split('https://rickandmortyapi.com/api/episode/')[1]);
    });
    
    return {
      id: response.id,
      name: response.name,
      status: response.status,
      species: response.species,
      type: response.type,
      gender: response.gender,
      origin: response.origin,
      location: response.location,
      image: response.image,
      episodes$: episodeService.getEpisodesByIds(episodesIds.join(',')),
      detailedOrigin$: locationService.getLocationByUrl(response.origin.url),
      detailedLocation$: locationService.getLocationByUrl(response.location.url)       
    }
  }

  responseToDetailedLocation(response: any): Location {
    const characterService = this.injector.get(CharacterService);

    let charactersIds: string[] = [];

    response.residents.forEach(url => {
      charactersIds.push(url.split('https://rickandmortyapi.com/api/character/')[1]);
    });

    return {
      id: response.id,
      name: response.name,
      type: response.type,
      dimension: response.dimension,
      residents$: characterService.getCharactersByIds(charactersIds.join(','))
    }
  }

  responseToLocation(response: any): Location {
    return {
      id: response.id,
      name: response.name,
      type: response.type,
      dimension: response.dimension,
    }
  }

  responseToEpisodes(response: any): Episode[] {
    let episodes: Episode[] = [];

    if (Array.isArray(response)) {
      for (let i = 0; i < response.length; i++) {
        episodes.push({
          id: response[i].id,
          name: response[i].name,
          air_date: response[i].air_date,
          episode: response[i].episode,    
        } as Episode);
      }
    } else {
      episodes.push({
        id: response.id,
        name: response.name,
        air_date: response.air_date,
        episode: response.episode,    
      } as Episode);
    }

    return episodes;
  }

  responseToDetailedEpisode(response: any): Episode {
    const characterService = this.injector.get(CharacterService);

    let charactersIds: string[] = [];

    response.characters.forEach(url => {
      charactersIds.push(url.split('https://rickandmortyapi.com/api/character/')[1]);
    });

    return {
      id: response.id,
      name: response.name,
      air_date: response.air_date,
      episode: response.episode,
      characters$: characterService.getCharactersByIds(charactersIds.join(','))
    }
  }
}
