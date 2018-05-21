import { USSeismicDesignService } from './../services/us-seismic-design.service';
import { Component, OnInit, Input } from '@angular/core';
import { GoogleMapsService } from '../services/google-maps.service';


interface SiteSoilClassification{
     siteClass : string;
     description : string;
}


@Component({
  selector: 'inputs-project',
  templateUrl: './inputs-project.component.html',
  styleUrls: ['./inputs-project.component.css']
})
export class InputsProjectComponent implements OnInit {

  constructor(private googleMapsService : GoogleMapsService,
    private uSSeismicDesignService : USSeismicDesignService   ) {

   }

   sD1 : number;
   sDs: number;
   sM1: number;
   sMs: number;
   sS : number;
   s1: number;
   tL: number;
   
  address : string;
  siteSoilClassification : string;
  designCodeReferenceDocument : string;
  riskCategory : string;
  latitude : number;
  longitude : number;
  private seismicDesignUrl : string;
  private geoCodeAddress : string;
  private geoCodeUrl : string; 
  private designCodeReferenceDocuments = ["ASCE7-10"];
  private siteSoilClassifications = [
    {siteClass: 'A', description: 'Hard Rock'},
    {siteClass: 'B', description: 'Rock'},
    {siteClass: 'C', description: 'Very Dense Soil & Soft Rock'},
    {siteClass: 'D', description: 'Stiff Soil'},
    {siteClass: 'E', description: 'Soft Clay Soil'}
  ];
  private riskCategories = ['I', 'II', 'III', 'IV'];

  ngOnInit() {
  }

  log(x) {console.log(x);}

  submit(f){
    this.address = f.value.siteAddress;
    this.riskCategory = f.value.riskCategory;
    this.designCodeReferenceDocument = f.value.designCodeReferenceDocument;
    this.siteSoilClassification = f.value.siteSoilClassification.siteClass;
    console.log(f);
    this.geoCodeAddress = this.getGeoCodeAddressForUrl();
    this.geoCodeUrl = this.generateGeoCodeUrl();
    this.getLatLongTest();
    this.seismicDesignUrl = this.generateSeismicDesignUrl();
    this.getSeismicDesignCriteria();

  }

  getGeoCodeAddressForUrl () : string
  {
    return this.address.split(' ').join('+');
  }

  generateGeoCodeUrl() : string
  {
    let prefix : string = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    let suffix : string = "&key=AIzaSyAt3J7Dm8qWjEzBIUyJJYfutS1alnKb_1o";
    return prefix + this.geoCodeAddress + suffix;
  }

  getLatLong()
  {
    this.googleMapsService.getLatLongFromAddress(this.geoCodeUrl)
    .subscribe(response => {
      this.latitude = response.json().results[0].geometry.location.lat;
      this.longitude = response.json().results[0].geometry.location.lng;
    });
  }

  getLatLongTest()
  {
    this.latitude = 39.6331849;
    this.longitude = -104.898149;
  }

  generateSeismicDesignUrl() : string {
    //'https://earthquake.usgs.gov/ws/designmaps/asce7-10.json?latitude=34&longitude=-118&riskCategory=III&siteClass=C&title=Example';
    let url : string = 'https://earthquake.usgs.gov/ws/designmaps/';
    url += 'asce7-10';
    url += '.json?';
    url += 'latitude=' + this.latitude as string;
    url+='&';
    url += 'longitude=' + this.longitude as string;
    url+='&';
    url+='riskCategory=' + this.riskCategory;
    url+='&';
    url+='siteClass=' + this.siteSoilClassification;
    url+='&';
    url+='title=ExampleTitle';
    return url;
  }

  getSeismicDesignCriteria()
  {
    this.uSSeismicDesignService.getSeismicDesignReport(this.seismicDesignUrl)
    .subscribe(response => {
      let data = response.json().response.data;
      this.sD1 = data.sd1;
      this.sS = data.ss;
      this.s1 = data.s1;
      this.sMs = data.sms;
      this.sM1 = data.sm1;
      this.sDs = data.sds;
      this.tL = data["t-sub-l"];
      console.log(response.json());
    });
  }

}
