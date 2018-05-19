import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'filter-box-price',
  templateUrl: './filter-box-price.component.html',
  styleUrls: ['./filter-box-price.component.css']
})
export class FilterBoxPriceComponent implements OnInit {
  filterApplied : boolean = false;
  constructor() { }
  isExpanded: boolean = false;
  toggle(){
    this.isExpanded = !this.isExpanded;
  }

  onFilterApplied(isFilterApplied){
    this.filterApplied = isFilterApplied;
    console.log(this.filterApplied);
  }

  ngOnInit() {
  }

}
