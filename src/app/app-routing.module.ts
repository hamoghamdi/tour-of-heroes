import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { HeroesComponent } from './components/heroes/heroes.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
// import { HeroDetailComponent } from './components/hero-detail/hero-detail.component'

const routes: Routes = [
  { path: "heroes", component: HeroesComponent},
  { path: "dashboard", component: DashboardComponent},
  // { path: "heroes/:id", component: HeroDetailComponent},
  { 
    path: 'heroes/:id', 
  loadChildren: () => import('./components/hero-detail/hero-detail.module').then(m => m.HeroDetailModule)
},
  { path: "", redirectTo: '/dashboard', pathMatch:'full'} // default route 
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
