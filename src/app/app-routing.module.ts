import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { UnHeroeComponent } from './un-heroe/un-heroe.component';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users/users.component';
import { VideoComponent } from './video/video.component';
import { TopComponent } from './top/top.component';
const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'form', component:FormComponent},
  {path: 'heroes', component:HeroesComponent},
  {path: 'about', component:AboutComponent},
  {path: 'users', component:UsersComponent},
  {path: 'video', component:VideoComponent},
  {path: 'top', component:TopComponent},
  {path: 'heroe/:id', component: UnHeroeComponent},
  {path: 'buscador/:nombreh', component:SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
