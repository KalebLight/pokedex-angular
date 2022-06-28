import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-pokemon',
  templateUrl: './info-pokemon.component.html',
  styleUrls: ['./info-pokemon.component.css'],
})
export class InfoPokemonComponent implements OnInit {
  @Input() pokemonTypes!: any;
  @Input() heightConversor!: any;
  @Input() weightConversor!: any;
  constructor() {}

  ngOnInit(): void {}
}
