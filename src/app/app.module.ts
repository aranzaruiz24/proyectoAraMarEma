import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UnHeroeComponent } from './un-heroe/un-heroe.component';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users/users.component';
import { VideoComponent } from './video/video.component';

import { DomseguroPipe } from './video/domseguro.pipe';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    SearchComponent,
    UnHeroeComponent,
    FormComponent,
    UsersComponent,
    VideoComponent,
    DomseguroPipe,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
