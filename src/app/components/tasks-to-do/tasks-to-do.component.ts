import { Component, OnInit, Type } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks-to-do',
  templateUrl: './tasks-to-do.component.html',
  styleUrls: ['./tasks-to-do.component.css']
})
export class TasksToDoComponent implements OnInit {

  tasks: Task[] = [];

  subscription:any = Subscription;

  constructor(private taskService: TaskService) {}


  ngOnInit(): void {

    this.subscription = this.taskService.refresh$.subscribe(()=>{
      this.taskService.getTasks();
    })

    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task){
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );
  }

  ToggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

}