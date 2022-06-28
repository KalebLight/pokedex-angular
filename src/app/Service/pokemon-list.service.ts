import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonList } from '../Interface/pokemonList';
@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient) {}

  public getPokemonsService(): Observable<PokemonList> {
    return this.httpClient.get<PokemonList>(
      this.apiUrl + '?offset=0&limit=151'
    );
  }

  public getSinglePokemonService(id: number) {
    return this.httpClient.get(this.apiUrl + '/' + id);
  }
}
