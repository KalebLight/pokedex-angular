import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Interface/pokemon';
import { PokemonListService } from 'src/app/Service/pokemon-list.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css'],
})
export class CardsListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(public pokemonListService: PokemonListService) {}
  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonListService.getPokemonsService().subscribe((data) => {
      this.pokemons = data.results;
    });
  }
}
