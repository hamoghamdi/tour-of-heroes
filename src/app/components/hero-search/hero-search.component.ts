import { Component, OnInit } from '@angular/core';
import { Observable , Subject} from 'rxjs'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

import { Hero } from '../../hero'
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$! : Observable<Hero[]>;
  private serachTerms = new Subject<string>();
  // Subject in an observable. + source of observable values 
  // You can push values into that Observable by calling its next(value)

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.serachTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap( (term:string) => this.heroService.searchHeroes(term)) 
      // every qulifying key triggers http req. 
      // preserves the original request order while returning only the observable from the most recent HTTP method call. Results from prior calls are canceled and discarded. 
      // @ref https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap
    )
  }

  search(term: string) : void{
    // Push a search term into the observable stream.
    this.serachTerms.next(term)
  }

}
