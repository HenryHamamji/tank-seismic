import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'inputs-seismic',
  templateUrl: './inputs-seismic.component.html',
  styleUrls: ['./inputs-seismic.component.css']
})
export class InputsSeismicComponent implements OnInit {
  @Input() address : string;
  @Input() siteClass : string;
  @Input() riskCategory : string;
  @Input() designCodeReferenceDocument : string;

  constructor() { 
  }

  ngOnInit() {
  }

}
