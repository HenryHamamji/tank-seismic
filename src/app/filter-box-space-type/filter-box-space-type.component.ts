import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-box-space-type',
  templateUrl: './filter-box-space-type.component.html',
  styleUrls: ['./filter-box-space-type.component.css', '../../filter-box-styles.css']
})
export class FilterBoxSpaceTypeComponent implements OnInit {

  constructor() { }
  spaceTypeTitle = "Space Types";
  isExpanded : boolean = false;
  filterApplied : boolean = false; //true if values of the range have been changed by the user.
  listingsFiltered : boolean = false;

  ngOnInit() {
  }

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

  filterListingsOnClickOutside(){
    this.listingsFiltered = true;
    console.log("filtering listings ...");
  }

  onClickedOutside(e: Event) {
    var target = e.target as HTMLInputElement;
    var idAttr = target.id;
      if(idAttr == "space-type-btn" && this.isExpanded)
      {
        return;
      }
            this.isExpanded = !this.isExpanded;

      if(this.filterApplied)
      {
        console.log("going to filter listings...");
              this.filterListingsOnClickOutside();
      }
      this.setSpaceTypesTitle();
  }

  setSpaceTypesTitle(){

  }

}
