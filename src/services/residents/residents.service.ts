import { Injectable } from '@angular/core';
import { Residents } from './residents.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';

const baseurl = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root',
})
export class ResidentsService {
  constructor(private http: HttpClient) {
  }

  getResidents() {
    return this.http.get<Residents>(baseurl, httpOptions)
    .pipe(
      map(reside => {
        return reside;
      })
    );
  }
}
