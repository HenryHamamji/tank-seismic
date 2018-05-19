import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GoogleMapsService {
  constructor(private http : Http) { }

  getLatLongFromAddress(geoCodeUrl : string)
  {
    return this.http.get(geoCodeUrl);
  }


}

