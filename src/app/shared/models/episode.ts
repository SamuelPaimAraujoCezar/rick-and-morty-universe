import { Character } from './character';

import { Observable } from 'rxjs';

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters$?: Observable<Character[]>;
}
