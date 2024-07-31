import {Component, inject, Input} from '@angular/core';

import {type Task} from "./task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
