import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class USSeismicDesignService {
  constructor(private http : Http) { }


  getSeismicDesignReport(seismicDesignUrl : string){
    return this.http.get(seismicDesignUrl);
  }
}
