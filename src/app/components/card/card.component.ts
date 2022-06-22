import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() index!: number;
  @Input() name!: string;
  baseUrlPhoto = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

  constructor() {}

  ngOnInit(): void {}

  getIdPhotoPokemonList(id: number) {
    var stringId = String(id);
    var newId = '';
    if (stringId.length === 1) {
      newId = '00' + stringId;
      return newId;
    }
    if (stringId.length === 2) {
      newId = '0' + stringId;
      return newId;
    } else {
      newId = stringId;
      return newId;
    }
  }
}
