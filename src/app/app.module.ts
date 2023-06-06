import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeroesComponent} from './module/heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from './module/hero-detail/hero-detail.component';
import {DashboardComponent} from './module/dashboard/dashboard.component';
import { HeroSearchComponent } from './module/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
