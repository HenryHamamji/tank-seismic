import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-box-price',
  templateUrl: './filter-box-price.component.html',
  styleUrls: ['./filter-box-price.component.css']
})
export class FilterBoxPriceComponent implements OnInit {

  constructor() { }
  public inputSpeedRange = [4, 80];


  ngOnInit() {
  }

}
