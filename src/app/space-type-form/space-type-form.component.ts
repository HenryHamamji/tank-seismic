import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'space-type-form',
  templateUrl: './space-type-form.component.html',
  styleUrls: ['./space-type-form.component.css']
})
export class SpaceTypeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  spaceTypes : string[] = ['Desks', 'Private Offices', 'Meeting Rooms'];
  deskCount : number = 0;
  privateOfficeCount : number = 0;
  meetingRoomCount : number = 0;
  @Output() onClickApply = new EventEmitter();
  isSpaceTypeSelected : boolean = false;

  onDeskCounterChanged(counterValue){
    this.deskCount = counterValue;
    this.isSpaceTypeSelected = this.checkIfSpaceTypeIsSelected();
  }

  onPrivateOfficeCounterChanged(counterValue){
    this.privateOfficeCount = counterValue;
    this.isSpaceTypeSelected = this.checkIfSpaceTypeIsSelected();
  }

  onMeetingRoomCounterChanged(counterValue){
    this.meetingRoomCount = counterValue;
    this.isSpaceTypeSelected = this.checkIfSpaceTypeIsSelected();

  }

  onApply()
  {
    this.onClickApply.emit();
  }

  onClear()
  {
    this.clearFilters();
  }

  checkIfSpaceTypeIsSelected(){
    if(this.deskCount == 0 && this.privateOfficeCount == 0 && this.meetingRoomCount == 0)
    {
      return false;
    }
    return true;
  }

  clearFilters(){
    this.deskCount = 0;
    this.privateOfficeCount = 0;
    this.meetingRoomCount = 0;
  }





}
