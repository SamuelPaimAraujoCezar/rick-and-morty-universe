import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../shared/components/components.module';
import { EpisodeService } from './services/episode.service';
import { EpisodeInfoComponent } from './containers/episode-info/episode-info.component';



@NgModule({
  declarations: [
    EpisodeInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: ':id', component: EpisodeInfoComponent }
    ])
  ],
  exports: [
    EpisodeInfoComponent
  ],
  providers: [
    EpisodeService
  ]
})
export class EpisodeModule { }
