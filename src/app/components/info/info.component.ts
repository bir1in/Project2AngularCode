import { Component, OnInit } from '@angular/core';
import { Starship } from '../../models/starships';
// import { peopleList } from '../../models/people-list';
import { planetList } from '../../models/planet-list';
import { starshipList } from '../../models/ships-list';
import { People } from '../../models/people';
import { Planet } from '../../models/planets';
import { UserService } from '../../services/user.service';
import { ClientMessage } from '../../models/client-message.model';
import { Router } from '@angular/router';
import { PeopleList } from '../../models/people-list.model';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  //peoples = peopleList;
  planets = planetList;
  starships = starshipList;
  constructor(private router: Router, private userService: UserService) {}

  public peoples: PeopleList = new PeopleList([]);

  //To capture user input
  public people: People = new People();

  //To present received user
  public peopleData: People = new People();

  //To message the user
  public clientMessage: ClientMessage = new ClientMessage('');
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
        data => this.peoples = data,
        responseError => this.clientMessage = responseError.error
      );
  }
  ngOnInit() {
    
  }
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

}
