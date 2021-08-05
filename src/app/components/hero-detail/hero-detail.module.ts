import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { HeroDetailRoutingModule } from './hero-detail-routing.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule, HeroDetailRoutingModule
  ]
})
export class HeroDetailModule { }
