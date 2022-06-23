import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsListComponent } from './pages/home/cards-list/cards-list.component';
import { PokemonComponent } from './pages/pokemon/pokemon/pokemon.component';

const routes: Routes = [
  { path: '', component: CardsListComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
