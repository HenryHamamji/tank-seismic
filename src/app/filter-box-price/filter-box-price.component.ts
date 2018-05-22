import { Component, OnInit, Input} from '@angular/core';
import {SliderFormComponent} from '../slider-form/slider-form.component';
@Component({
  selector: 'filter-box-price',
  templateUrl: './filter-box-price.component.html',
  styleUrls: ['./filter-box-price.component.css', '../../filter-box-styles.css']
})
export class FilterBoxPriceComponent implements OnInit  {

  priceTitle : string = 'Price';
  minimumFilterPrice : number;
  maximumFilterPrice: number;
  filterApplied : boolean = false; //true if values of the range have been changed by the user.
  listingsFiltered : boolean = false;
  constructor() { }
  isExpanded: boolean = false;
  toggle(){
    this.isExpanded = !this.isExpanded;
    if(this.isExpanded)
    {
      
    }
    if(!this.isExpanded && this.filterApplied)
    {
          this.filterListingsOnClickOutside();
    }
  }

  onFilterRangeValuesChanged(rangeValuesData){
    this.filterApplied = rangeValuesData.isRangeValuesChanged;
    this.minimumFilterPrice = rangeValuesData.minimumFilterPrice;
    this.maximumFilterPrice = rangeValuesData.maximumFilterPrice;
  }

    onClickedOutside(e: Event) {
    var target = e.target as HTMLInputElement;
    var idAttr = target.id;
      if(idAttr == "price-btn" && this.isExpanded)
      {
        return;
      }
            this.isExpanded = !this.isExpanded;

      if(this.filterApplied)
      {
        console.log("going to filter listings...");
              this.filterListingsOnClickOutside();
      }
      this.setPriceTitle();
  }


  filterListingsOnClickOutside(){
    this.listingsFiltered = true;
    console.log("filtering listings ...");
  }

  filterListings(){
    this.listingsFiltered = true;
    this.isExpanded = !this.isExpanded;
    this.setPriceTitle();

    console.log("filtering listings ...");

  }

    setPriceTitle(){
    if(this.filterApplied && this.listingsFiltered)
    {
      this.priceTitle = '$'+this.minimumFilterPrice + '-' + '$'+this.maximumFilterPrice;
    }
    else
    {
      this.priceTitle = "Price";
    }
  }


  ngOnInit() {
  }

}
