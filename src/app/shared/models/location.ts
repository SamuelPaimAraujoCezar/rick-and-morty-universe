import { Observable } from 'rxjs';
import { Character } from './character';

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents$?: Observable<Character[]>;
}

export interface ShortLocation {
    name: string;
    url: string;
}
