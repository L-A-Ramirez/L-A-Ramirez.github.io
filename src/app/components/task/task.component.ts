import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;
  reminder: boolean = false;

  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(){ 
    if(!this.text) {
      alert("Porfavor agregue una tarea");
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
