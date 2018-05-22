import { Component, OnInit } from '@angular/core';

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


  onDeskCounterChanged(counterValue){
    this.deskCount = counterValue;
  }

  onPrivateOfficeCounterChanged(counterValue){
    this.privateOfficeCount = counterValue;
  }

  onMeetingRoomCounterChanged(counterValue){
    this.meetingRoomCount = counterValue;
  }





}
