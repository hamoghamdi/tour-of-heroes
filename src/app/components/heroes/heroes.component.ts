import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero'
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeros().subscribe( heroes => (this.heroes = heroes));
  }


  add(heroname: string): void{
    heroname = heroname.trim();
    if (!heroname ) { return ; }
    this.heroService.addHero( {name: heroname} as Hero).subscribe( hero => this.heroes.push(hero))
    // this.heroService.addHero({ name } as Hero).subscribe( hero => {this.heroes.push(hero)})
    // it must match the interface to accept it using "as"
  }

  delete(hero: Hero): void{
    this.heroes = this.heroes.filter( h => h.id !== hero.id)
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
 // dev branch 