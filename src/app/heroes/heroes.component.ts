import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroComponent } from './hero/hero.component';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [HeroComponent, CommonModule],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  @Output()heroSelected=new EventEmitter<Hero>();

  constructor() {
    this.heroes = HEROES;
    // console.log(this.heroes);
  }

  ngOnInit() {
    this.heroes = HEROES;
  }
  onSelected(hero: Hero){
    // console.log(hero);
    // this.heroSelected.emit(hero);
    
  }
}
