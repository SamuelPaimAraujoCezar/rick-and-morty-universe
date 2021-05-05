import { Observable } from 'rxjs';
import { Episode } from './episode';
import { Location, ShortLocation } from './location';

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: ShortLocation;
    location: ShortLocation;
    image: string;
    episodes$?: Observable<Episode[]>;
    detailedOrigin$?: Observable<Location>;
    detailedLocation$?: Observable<Location>;
}
