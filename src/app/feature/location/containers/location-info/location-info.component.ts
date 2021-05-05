import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Location } from 'src/app/shared/models/location';
import { Character } from 'src/app/shared/models/character';
import { LocationService } from './../../services/location.service';

@Component({
  selector: 'rma-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss']
})
export class LocationInfoComponent implements OnInit, OnDestroy {

  location: Location;
  locationResidents$: Observable<Character[]>;

  id: number = this.activatedRoute.snapshot.params['id'];

  private componentDestroyed$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute, private locationService: LocationService, 
              public router: Router) { }

  ngOnInit(): void {
    this.locationService.getLocationById(this.id)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((location: Location) => {
        this.location = location;
        this.locationResidents$ = location.residents$;
      }, error => console.log(error));
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  openCharacterInfo(event) {
    this.router.navigate(['characters', event.id]);
  }

}
