import { Component, OnInit } from '@angular/core';
import {trigger, transition, query, animate,keyframes, style, stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  itemCount: number;
  btnText: string = "Add an item";
  goalText: string = "My life goal";
  goals= [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem(){
    this.goals.push(this.goalText);
    this.itemCount = this.goals.length;
  }

  removeItem(i) {
    this.goals.splice(i , 1);
  }

}
