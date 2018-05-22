import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calcs',
  templateUrl: './calcs.component.html',
  styleUrls: ['./calcs.component.css']
})
export class CalcsComponent implements OnInit {

  constructor() { }

  seismicImportanceFactor : number;

  getSeismicImportanceFactor(){
    
  }

  ngOnInit() {
  }

}
