import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  toDoItem: any;
  toDoList: any;
  entry: string;
  constructor() { }

  ngOnInit(): void {
    this.toDoList = new Array();
    this.entry = '';
  }

  addToList(text){
    console.log(text)
    console.log(this.entry)
    if(text !== ''){
      const task = {
        title: text,
        completed: false,
        selected: false
      }
      this.toDoList.push(task)
      console.log(this.toDoList)
      this.entry = null;
    }
    else{
      alert('Enter Task!')
    }

  }

}
