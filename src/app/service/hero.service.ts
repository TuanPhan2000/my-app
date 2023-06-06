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
    return of(Data.heroes);
  }

  getHero(id: number): Observable<Hero> {
    return of(Data.heroes.filter(h => h.id === id)[0]);
  }

  updateHero(heroUpdate: Hero): Observable<Hero[]> {
    let heroOld: Hero = Data.heroes.filter(h => h.id === heroUpdate.id)[0];
    heroOld.name = heroUpdate.name;
    return of(Data.heroes);
  }

  addHero(heroNew: Hero): Observable<Hero[]> {
    heroNew.id = Data.heroes[Data.heroes.length - 1].id + 1;
    Data.heroes.push(heroNew);
    return of(Data.heroes);
  }

  deleteHero(id: number): Observable<Hero[]> {
    Data.heroes = Data.heroes.filter(h => h.id !== id);
    return of(Data.heroes);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return of(Data.heroes.filter(h => h.name.includes(term)));
  }




}
