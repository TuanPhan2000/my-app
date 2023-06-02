import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {observable, Observable, of} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    // // const heroes = of(HEROES);
    // this.log('fetched heroes');
    // // return heroes;
    // return this.http.get<any>(this.heroesUrl);

    return new Observable<Hero[]>((observable) => {
      this.http.get<any>(this.heroesUrl).subscribe(
        (response) => {
          observable.next(response);
          observable.complete();
          this.log('fetched heroes');
        }
      )
    })
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
