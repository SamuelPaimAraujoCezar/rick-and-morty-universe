import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../shared/components/components.module';
import { LocationService } from './services/location.service';
import { LocationInfoComponent } from './containers/location-info/location-info.component';



@NgModule({
  declarations: [
    LocationInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: ':id', component: LocationInfoComponent }
    ])
  ],
  exports: [
    LocationInfoComponent
  ],
  providers: [
    LocationService
  ]
})
export class LocationModule { }
