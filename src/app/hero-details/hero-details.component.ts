import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  standalone: true,
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  imports: [CommonModule, FormsModule],
})
export class HeroDetailsComponent implements OnInit, OnChanges {
  @Input() selectedHero!: Hero;
  constructor() {}

  ngOnInit() {
    //console.log(this.selectedHero)
  }
  ngOnChanges() {
    console.log(this.selectedHero);
  }
}