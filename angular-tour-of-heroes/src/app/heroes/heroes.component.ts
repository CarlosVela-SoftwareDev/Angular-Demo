import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
  
  // constructor(private heroService: HeroService) {}
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // heroes = HEROES;
  heroes: Hero[] = [];

  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}

