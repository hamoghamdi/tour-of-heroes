import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes'
import { Hero } from '../hero'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private mssgservice: MessageService) { } // "service-in-service" 

  getHeros() : Observable<Hero[]>{
    const heroes = of(HEROES);
    this.mssgservice.add("Hero Service: fetched Heroes");
    return heroes;
  }
  getHero(id:number): Observable<Hero>{
    const hero : Hero = HEROES.find(hero => hero.id === id)!;
    this.mssgservice.add(`HeroService: fetched hero with id ${id}`)
    return of(hero)
  }
}
