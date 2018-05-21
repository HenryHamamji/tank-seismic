import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {SliderModule} from 'primeng/slider';

@Component({
  selector: 'slider-form',
  templateUrl: './slider-form.component.html',
  styleUrls: ['./slider-form.component.css']
})
export class SliderFormComponent implements OnInit {
  @Input() isExpanded : boolean;
  @Output() rangeValuesChanged = new EventEmitter();
  @Output() onClickApply = new EventEmitter();
  minimumBoundaryPrice : number = 20;
  maximumBoundaryPrice: number = 150;
  minimumFilterPrice : number = this.minimumBoundaryPrice;
  maximumFilterPrice: number = this.maximumBoundaryPrice;
  rangeValues: number[] = [this.minimumBoundaryPrice, this.maximumBoundaryPrice];
  isFilterApplied : boolean; // Apply been clicked to initiate filtering.
  isRangeValuesChanged : boolean = false;
  constructor() {
    
  }

  handleChange(e){
    if(e.values[0] == this.minimumBoundaryPrice && e.values[1] == this.maximumBoundaryPrice)
    {
      this.isRangeValuesChanged = false;
      this.rangeValuesChanged.emit({isRangeValuesChanged: this.isRangeValuesChanged, minimumFilterPrice : this.minimumFilterPrice, maximumFilterPrice : this.maximumFilterPrice});
    }
    else{
    this.isRangeValuesChanged = true;
      this.rangeValuesChanged.emit({isRangeValuesChanged: this.isRangeValuesChanged, minimumFilterPrice : this.minimumFilterPrice, maximumFilterPrice : this.maximumFilterPrice});
    }
    this.minimumFilterPrice = e.values[0];
    this.maximumFilterPrice = e.values[1];
  }

  ngOnInit() {
  }

  onApply(f)
  {
    this.isFilterApplied = true;
    this.onClickApply.emit();
  }

  onClear(slider)
  {
    this.isRangeValuesChanged = false;
      this.rangeValuesChanged.emit({isRangeValuesChanged: this.isRangeValuesChanged, minimumFilterPrice : this.minimumFilterPrice, maximumFilterPrice : this.maximumFilterPrice});
    this.clearFilters();
    slider.handleValues[0] = 0;
    slider.handleValues[1] = 100;
  }

  clearFilters(){
    this.minimumFilterPrice = this.minimumBoundaryPrice;
    this.maximumFilterPrice = this.maximumBoundaryPrice;
  }



}
