import { PlanetList } from '../models/planet-list.model';
import { USER_URL } from 'src/environments/environment';
import { of } from 'rxjs/Observable/of';
import { Planet } from '../models/planet';
import { Injectable } from '@angular/core';

import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PlanetService {
  constructor(private http: HttpClient) { }
  public findPlanetById(): Observable<PlanetList> {
    return this.http
            .get(`${USER_URL}/findPlanet`)
            .catch(this.handleError);
  }
  private handleError(response: Response) {
    return Observable.throw(response);
  }
}
 
  