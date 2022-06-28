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
  pokemon: any[] = [];
  pokemonPhotoUrl = '';

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
      this.pokemon.push(data);
      this.pokemonPhotoUrl =
        this.pokemon[0].sprites.other.dream_world.front_default;
    });
  }

  heightConversor() {
    return this.pokemon[0].height / 10;
  }
  weightConversor() {
    return this.pokemon[0].weight / 10;
  }
}
