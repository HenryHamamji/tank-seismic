import { Component, OnInit, ElementRef } from '@angular/core';
import {SliderModule} from 'primeng/slider';

@Component({
  selector: 'slider-form',
  templateUrl: './slider-form.component.html',
  styleUrls: ['./slider-form.component.css']
})
export class SliderFormComponent implements OnInit {
  minimumBoundaryPrice : number = 30;
  maximumBoundaryPrice: number = 60;
  minimumFilterPrice : number = this.minimumBoundaryPrice;
  maximumFilterPrice: number = this.maximumBoundaryPrice;
  rangeValues: number[] = [this.minimumBoundaryPrice, this.maximumBoundaryPrice];

  constructor() {
    
  }

  handleChange(e){
    this.minimumFilterPrice = e.values[0];
    this.maximumFilterPrice = e.values[1];
  }

  ngOnInit() {
  }

}
