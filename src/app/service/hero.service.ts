import { Injectable } from '@angular/core';
import {Hero} from "../models/hero";
import { Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Data} from "../util/mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return Data.heroes ? of(Data.heroes) : of([]);
  }

  getHero(id: number): Observable<Hero> {
    if (Data.heroes) {
      let hero: Hero = Data.heroes.filter(h => h.id === id)[0];
      if(hero) {
        return of(hero);
      }
    }
    return of({name: "Không tồn tại !"} as Hero);
  }

  updateHero(heroUpdate: Hero): Observable<Hero[]> {
    if (Data.heroes) {
      let heroOld: Hero = Data.heroes.filter(h => h.id === heroUpdate.id)[0];
      if (heroOld) {
        heroOld.name = heroUpdate.name;
        return of(Data.heroes);
      }
    }
    return of([]);
  }

  addHero(heroNew: Hero): Observable<Hero[]> {
    if (Data.heroes && Data.heroes.length) {
      heroNew.id = Data.heroes[Data.heroes.length - 1].id + 1;
      Data.heroes.push(heroNew);
    }
    else {
      Data.heroes = [];
      heroNew.id = 12;
      Data.heroes.push(heroNew);
    }
    return of (Data.heroes);
  }

  deleteHero(id: number): Observable<Hero[]> {
    if (Data.heroes && Data.heroes.length) {
      Data.heroes = Data.heroes.filter(h => h.id !== id);
    }
    else Data.heroes = [];
    return of(Data.heroes);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    if (Data.heroes) {
      return of(Data.heroes.filter(h => h.name.includes(term)));
    }
    return of([]);
  }




}
