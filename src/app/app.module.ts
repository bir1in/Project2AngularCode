import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipsComponent } from './components/ships/ships.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UserService } from './services/user-service.service';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { PeopleService } from './services/people.service';
import { PlanetService } from './services/planet.service';
import { StarshipService } from './services/starship.service';

@NgModule({
  declarations: [
    AppComponent,
    ShipsComponent,
    InfoComponent,
    LoginComponent,
    NavComponent,
    CreateaccountComponent,
    PeopleDetailComponent,
    PlanetDetailComponent,
    StarshipDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/project2'}, UserService, PeopleService, PlanetService, StarshipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
