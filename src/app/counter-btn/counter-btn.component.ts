import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-btn',
  templateUrl: './counter-btn.component.html',
  styleUrls: ['./counter-btn.component.css']
})
export class CounterBtnComponent implements OnInit {

  constructor() { }
  counter : number = 0;
  ngOnInit() {
  }

  onIncrement(){
    this.counter ++;
  }

  onDecrement(){
    this.counter --;
  }

  isCounterZero(){
    if(this.counter == 0){
      return true;
    }
    return false;
  }

}
