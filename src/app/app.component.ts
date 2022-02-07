import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GOALS';
  // goals:string[];

  // constructor(){
  //   this.goals =['watch finding Nemo', 'By cookies', 'Get new phone case']
  // }
  // goals:Goal[] =[
  //   {id:1,name:'Watch Finding Nemo' Description:' illlllllll'},
  //   {id:2,name:'Buy Cookies'},
  //   {id:3,name:'Get New Phone Case'},
  //   {id:4,name:'Get Dog Food'},
  //   {id:5,name:'Solve math homework'},
  //   {id:6,name:'Plot my world domination plan'},
  // ];
}
