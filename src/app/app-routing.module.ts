import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomePage } from './feature/home/containers/home/home.page';
import { CharacterInfoComponent } from './feature/home/containers/character-info/character-info.component';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'characters/:id', component: CharacterInfoComponent },
  { path: 'locations', loadChildren: () => import('./feature/location/location.module').then(m => m.LocationModule) },
  { path: 'episodes', loadChildren: () => import('./feature/episode/episode.module').then(m => m.EpisodeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
