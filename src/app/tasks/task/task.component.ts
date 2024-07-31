import {Component, inject, Input} from '@angular/core';

import {type Task} from "./task.model";
import {DatePipe} from "@angular/common";
import {CardComponent} from "../../shared/card/card.component";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
