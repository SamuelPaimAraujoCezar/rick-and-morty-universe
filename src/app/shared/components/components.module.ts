import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterMiniCardListComponent } from './character-mini-card-list/character-mini-card-list.component';


@NgModule({
  declarations: [
    NavComponent, 
    HeaderComponent, 
    FooterComponent, 
    CharacterMiniCardListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    NavComponent, 
    HeaderComponent, 
    FooterComponent,
    CharacterMiniCardListComponent
  ]
})
export class ComponentsModule { }
