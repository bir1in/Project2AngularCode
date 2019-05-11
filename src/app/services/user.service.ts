import { Injectable } from '@angular/core';

import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { User } from '../models/user.model';
import { ClientMessage } from '../models/client-message.model';
import { USER_URL } from '../../environments/environment';
import { UserList } from '../models/user-list.model';
import { People } from '../models/people';
import { Planet } from '../models/planets';
import { Starship } from '../models/starships';
import { PeopleList } from '../models/people-list.model';
import { PlanetList } from '../models/planet-list.model';
import { StarshipList } from '../models/starship-list.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public registerUser(user: User): Observable<ClientMessage> {
    return this.http
            .post(`${USER_URL}/register`, user)
            .catch(this.handleError);
  }

  public findUser(user: User): Observable<User> {
    return this.http
            .post(`${USER_URL}/find`, user)
            .catch(this.handleError);
  }

  public findAllUsers(): Observable<UserList> {
    return this.http
            .get(`${USER_URL}/all`)
            .catch(this.handleError);
  }

  public findPeopleById(): Observable<PeopleList> {
    return this.http
            .get(`${USER_URL}/findPeople`)
            .catch(this.handleError);
  }

  public findPeopleById2(people: People): Observable<People> {
    return this.http
            .get(`${USER_URL}/findPeople`)
            .catch(this.handleError);
  }

  public findPlanetById(): Observable<PlanetList> {
    return this.http
            .get(`${USER_URL}/findPlanet`)
            .catch(this.handleError);
  }

  public findStarshipById(): Observable<StarshipList> {
    return this.http
            .get(`${USER_URL}/findStarship`)
            .catch(this.handleError);
  }

  private handleError(response: Response) {
    return Observable.throw(response);
  }
}
