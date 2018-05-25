import { Component, OnInit, ViewChild } from '@angular/core';
import { DateRangePickerComponent } from '../date-range-picker/date-range-picker.component';
import * as moment from 'moment';

@Component({
  selector: 'filter-box-date-picker',
  templateUrl: './filter-box-date-picker.component.html',
  styleUrls: ['./filter-box-date-picker.component.css', '../../filter-box-styles.css']
})
export class FilterBoxDatePickerComponent implements OnInit {

  constructor() { }
  private datesPickedTitle: string = "Dates";
  isExpanded: boolean = false;
  filterApplied: boolean = false; //true if values of the range have been changed by the user.
  listingsFiltered: boolean = false;
  @ViewChild(DateRangePickerComponent) dateRangePciker: DateRangePickerComponent;
  ngOnInit() {
  }

  toggle() {
    if (this.isExpanded) {
      this.filterListings();
      return;
    }
    this.isExpanded = !this.isExpanded;
  }

  filterListingsOnClickOutside() {
    this.listingsFiltered = true;
    console.log("filtering listings ...");
  }

  onClickedOutside(e: Event) {
    var target = e.target as HTMLInputElement;
    var idAttr = target.id;
    if (idAttr == "date-picker-btn" && this.isExpanded) {
      return;
    }
    this.isExpanded = !this.isExpanded;
    if (this.filterApplied) {
      console.log("going to filter listings...");
      this.filterListingsOnClickOutside();
    }
    this.setDatesPickedTitle();
  }

  isFilterApplied(wasFilterApplied) {
    this.filterApplied = wasFilterApplied;
  }

  filterListings() {
    this.listingsFiltered = true;
    this.isExpanded = !this.isExpanded;
    this.setDatesPickedTitle();
    console.log("filtering listings ...");
  }

  setDatesPickedTitle() {
    let datesPickedTitle: string[] = [];
    if (this.filterApplied && this.listingsFiltered) {
      let checkIn = this.formatDateForTitle(this.dateRangePciker.dateFrom);
      let checkOut = this.formatDateForTitle(this.dateRangePciker.dateTo);
      datesPickedTitle.push(checkIn);
      datesPickedTitle.push(checkOut);
      this.datesPickedTitle = datesPickedTitle.join('-');
    }
    else {
      this.datesPickedTitle = "Dates";
    }
  }

  formatDateForTitle(date) {
    return moment(date).format('MMM DD');
  }

  onApply(datePickerForm) {
    this.listingsFiltered = true;
    this.filterListings();
  }

  onClear() {
    this.filterApplied = false;
    this.clearFilters();
  }

  clearFilters() {
    this.dateRangePciker.dateFrom = null;
    this.dateRangePciker.dateTo = null;
  }



}
