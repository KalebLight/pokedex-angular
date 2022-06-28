import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-bars-div',
  templateUrl: './info-bars-div.component.html',
  styleUrls: ['./info-bars-div.component.css']
})
export class InfoBarsDivComponent implements OnInit {
  @Input() atack!: number;
  @Input() defense!: number;
  @Input() hp!: number;
  @Input() speed!: number;

  constructor() { }

  ngOnInit(): void {
  }


}
