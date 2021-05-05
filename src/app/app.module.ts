import { LocationModule } from './feature/location/location.module';
import { EpisodeModule } from './feature/episode/episode.module';
import { HomeModule } from './feature/home/home.module';
import { ComponentsModule } from './shared/components/components.module';
import { ResponseService } from './shared/services/response.service';
import { RESPONSE_SERVICE } from './shared/interfaces/reponse-service';
import { MaterialModule } from './shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    HomeModule,
    EpisodeModule,
    LocationModule,
    ComponentsModule
  ],
  providers: [
    { provide: RESPONSE_SERVICE, useClass: ResponseService },
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
