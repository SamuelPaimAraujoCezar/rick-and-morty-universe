import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomePage } from './containers/home/home.page';
import { FieldsModule } from './../../shared/components/fields/fields.module';
import { EpisodeModule } from './../episode/episode.module';
import { LocationModule } from './../location/location.module';
import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../shared/components/components.module';
import { CharacterService } from './services/character.service';
import { CharacterInfoComponent } from './containers/character-info/character-info.component';
import { EpisodeMiniCardListComponent } from './components/episode-mini-card-list/episode-mini-card-list.component';



@NgModule({
  declarations: [
    HomePage,
    CharacterInfoComponent,
    EpisodeMiniCardListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FieldsModule,
    EpisodeModule,
    LocationModule,
    ComponentsModule,
    InfiniteScrollModule
  ],
  providers: [
    CharacterService
  ]
})
export class HomeModule { }
