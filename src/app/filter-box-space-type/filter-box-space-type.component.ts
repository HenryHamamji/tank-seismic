import { Component, OnInit, ViewChild } from '@angular/core';
import {SpaceTypeFormComponent} from '../space-type-form/space-type-form.component';

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
  @ViewChild(SpaceTypeFormComponent) spaceTypeForm : SpaceTypeFormComponent;
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
    this.filterApplied = this.isFilterApplied();
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
    
    let spaceTypeTitle : string[] = [];
    if(this.filterApplied && this.listingsFiltered)
    {
      let numDesks : number = this.spaceTypeForm.deskCount;
      let numPrivateOffices : number = this.spaceTypeForm.privateOfficeCount;
      let numMeetingRooms : number = this.spaceTypeForm.meetingRoomCount;
      let deskString = "Desk";
      let privateOfficeString = "Private Office";
      let meetingRoomString = "Meeting Room";


      if(numDesks > 0)
      {
        if(numDesks > 1)
        {
          deskString+='s';
        }
        spaceTypeTitle.push(numDesks + " " + deskString);
      }
      if(numPrivateOffices > 0)
      {
        if(numPrivateOffices >1)
        {
          privateOfficeString+='s';

        }
        spaceTypeTitle.push(numPrivateOffices + " " + privateOfficeString);
      }
      if(numMeetingRooms > 0)
      {
        if(numMeetingRooms >1)
        {
          meetingRoomString += 's';
        }
        spaceTypeTitle.push(numMeetingRooms + " " + meetingRoomString);
      }
      this.spaceTypeTitle = spaceTypeTitle.join(', ');
    }
    else
    {
      this.spaceTypeTitle = "Space Types";
    }

  }

  isFilterApplied(){
    let numDesks : number = this.spaceTypeForm.deskCount;
    let numPrivateOffices : number = this.spaceTypeForm.privateOfficeCount;
    let numMeetingRooms : number = this.spaceTypeForm.meetingRoomCount;

    if(numDesks == 0 && numPrivateOffices == 0 && numMeetingRooms == 0)
    {
      return false;
    }
    return true;
    
  }

    filterListings(){
      this.listingsFiltered = true;
      this.filterApplied = this.isFilterApplied();
    this.isExpanded = !this.isExpanded;
    this.setSpaceTypesTitle();
    console.log("filtering listings ...");

  }


}
