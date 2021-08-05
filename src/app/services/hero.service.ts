import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes'
import { Hero } from '../hero'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'

  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
  
  constructor(private mssgservice: MessageService, private myhttp: HttpClient) { } // "service-in-service" 

  private log(mssg: string){
    this.mssgservice.add(`HeroService: ${mssg}`)
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation: string = 'operation', result?:T){
    return (error: any): Observable<T> => {
      console.log(error) // send the error to remote logging infrastructure

      this.log(`${operation} failed: ${error.message}`) // better job of transforming error for user consumption

      return of(result as T) // empty result 
    }
  }

  getHeros() : Observable<Hero[]>{
    // const heroes = of(HEROES);
    this.log("Hero Service: fetched Heroes");
    return this.myhttp.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    )
  }
  getHero(id:number): Observable<Hero>{
    // const hero : Hero = HEROES.find(hero => hero.id === id)!;
    const url = `api/heroes/${id}`
    this.log(`HeroService: fetched hero with id ${id}`)
    return this.myhttp.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero with id ${id}`)), catchError(this.handleError<Hero>(`getHero id ${id}`))
    )
  }

updateHero(hero: Hero): Observable<any>{
    return this.myhttp.put(this.heroesUrl, hero, this.httpOptions).pipe( 
      tap(_ => this.log(`hero updated ${hero.id}`)), 
      catchError(this.handleError<any>(`updateHero ${hero.id}`))
    )
  }

}
