import { Component, OnInit } from '@angular/core';
import { Starship } from '../../models/starships';
// import { peopleList } from '../../models/people-list';
// import { planetList } from '../../models/planet-list';
// import { starshipList } from '../../models/ships-list';
import { People } from '../../models/people';
import { Planet } from '../../models/planets';
import { UserService } from '../../services/user.service';
import { ClientMessage } from '../../models/client-message.model';
import { Router } from '@angular/router';
import { PeopleList } from '../../models/people-list.model';
import { PlanetList } from '../../models/planet-list.model';
import { StarshipList } from '../../models/starship-list.model';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  //peoples = peopleList;
  //planets = planetList;
  //starships = starshipList;
  constructor(private router: Router, private userService: UserService) {}

  public people: People = new People('','','','','','','','');
  public peoples: PeopleList = new PeopleList([]);
  public planets: PlanetList = new PlanetList([]);
  public starships: StarshipList = new StarshipList([]);

  //To message the user
  public clientMessage: ClientMessage = new ClientMessage('nothing to display');
  /*
  public findPeopleById2(): void {
    this.userService.findPeopleById(this.people)
    .subscribe(
      data => {
        this.peopleData = data;
      //this.router.navigate(['/info']);
      },
      responseError => {
        this.clientMessage = responseError.error;
      }
    );
  }
  */
  public findPeopleById(): void {
    this.userService.findPeopleById()
      .subscribe( 
        data => {this.peoples = data,
        console.log(data);
      },
        responseError => this.clientMessage = responseError.error
      );
  }
  public findPlanetById(): void {
    this.userService.findPlanetById()
      .subscribe( 
        data => {this.planets = data,
        console.log(data);
      },
        responseError => this.clientMessage = responseError.error
      );
  }
  public findStarshipById(): void {
    this.userService.findStarshipById()
      .subscribe( 
        data => {this.starships = data,
        console.log(data);
      },
        responseError => this.clientMessage = responseError.error
      );
  }
  ngOnInit() {
  }
  /*
  //method when select in the list it will highlight
  selectedPeople: People;
  onSelect(people: People): void{
    this.selectedPeople = people;
  }
  selectedPlanet: Planet;
  onSelect2(planet: Planet): void{
    this.selectedPlanet = planet;
  }
  selectedStarship: Starship;
  onSelect3(starship: Starship): void{
    this.selectedStarship = starship;
  }
  */
}
