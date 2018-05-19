import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {SliderModule} from 'primeng/slider';

@Component({
  selector: 'slider-form',
  templateUrl: './slider-form.component.html',
  styleUrls: ['./slider-form.component.css']
})
export class SliderFormComponent implements OnInit {
  @Output() filterApplied = new EventEmitter();
  minimumBoundaryPrice : number = 20;
  maximumBoundaryPrice: number = 150;
  minimumFilterPrice : number = this.minimumBoundaryPrice;
  maximumFilterPrice: number = this.maximumBoundaryPrice;
  rangeValues: number[] = [this.minimumBoundaryPrice, this.maximumBoundaryPrice];
  isFilterApplied : boolean;

  constructor() {
    
  }

  handleChange(e){
    this.minimumFilterPrice = e.values[0];
    this.maximumFilterPrice = e.values[1];
  }

  ngOnInit() {
  }

  onApply(f)
  {
    this.isFilterApplied = true;
    this.filterApplied.emit(this.isFilterApplied);
  }

}
