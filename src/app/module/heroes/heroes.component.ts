import {Component, OnInit} from '@angular/core';
import {Hero} from "../../models/hero";
import {HeroService} from "../../service/hero.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  constructor(private heroService: HeroService) {
  }

  heroes: Hero[] = [];

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(heroes => {
        this.heroes = heroes;
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe(
      heroes => {
        this.heroes = heroes;
      }
    );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
