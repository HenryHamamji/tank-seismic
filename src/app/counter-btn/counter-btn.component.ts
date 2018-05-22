import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'counter-btn',
  templateUrl: './counter-btn.component.html',
  styleUrls: ['./counter-btn.component.css']
})
export class CounterBtnComponent implements OnInit {

  constructor() { }
  @Input() counter : number = 0;
  privateOfficeCounter : number = 0;
  meetingRoomCounter : number = 0;

  @Output() counterChanged = new EventEmitter();
  
  ngOnInit() {
  }

  onIncrement(){
      this.counter ++;
      this.counterChanged.emit(this.counter);
  }

  onDecrement(){
      this.counter --;
      this.counterChanged.emit(this.counter);
    }

  isCounterZero(){
    if(this.counter == 0){
      return true;
    }
    return false;
  }

}
