import {Component, inject, Input} from '@angular/core';

import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  @Input({required: true}) userId!: string
  @Input({required: true}) name!: string;
  isAddingTask= false;
  private taskService = inject(TasksService);

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
