import { PeopleList } from '../models/people-list.model';
import { USER_URL } from 'src/environments/environment';
import { People } from '../models/people';
import { Injectable } from '@angular/core';

import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) { }
  public findPeopleById(): Observable<PeopleList> {
    return this.http
            .get(`${USER_URL}/findPeople`)
            .catch(this.handleError);
  }
  private handleError(response: Response) {
    return Observable.throw(response);
  }
 
  
 
  // getPeoples(): People[]{
  //   return peopleList;
  // }

}
