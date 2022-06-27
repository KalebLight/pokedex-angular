import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonListService } from 'src/app/Service/pokemon-list.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  id!: number;
  pokemon!: [];

  constructor(
    private route: ActivatedRoute,
    public pokemonListService: PokemonListService
  ) {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.getPokemon(this.id);
  }

  ngOnInit(): void {}

  getPokemon(id: number) {
    this.pokemonListService.getSinglePokemonService(id).subscribe((data) => {
      this.pokemon = data;
      console.log(this.pokemon);
    });
  }
}
