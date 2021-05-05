import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { SearchParams } from '../models/search-params';

@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {

  constructor() { }

  setCharacterSearchParams(searchParams: SearchParams): HttpParams {
    let httpParams = new HttpParams();
    
    if (searchParams.page) {
      httpParams = httpParams.set('page', searchParams.page.toString());
    }
    if (searchParams.query) {
      httpParams = httpParams.set('name', searchParams.query);
    }
    if (searchParams.field1) {
      httpParams = httpParams.set(searchParams.field1.type, searchParams.field1.value.toString());
    }
    if (searchParams.field2) {
      httpParams = httpParams.set(searchParams.field2.type, searchParams.field2.value.toString());
    }

    return httpParams;
  }
}
