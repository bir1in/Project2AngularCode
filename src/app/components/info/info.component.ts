import { Component, OnInit } from '@angular/core';
import { Starship } from '../../models/starships';
import { peopleList } from '../../models/people-list';
import { planetList } from '../../models/planet-list';
import { starshipList } from '../../models/ships-list';
import { People } from '../../models/people';
import { Planet } from '../../models/planets';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  peoples = peopleList;
  planets = planetList;
  starships = starshipList;
  constructor() { }

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
