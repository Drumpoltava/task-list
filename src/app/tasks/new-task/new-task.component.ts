import {Component, EventEmitter, Input, Output, inject} from '@angular/core';

import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private taskService = inject(TasksService)

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDueDate,
      },
      this.userId
    );
    this.onClose();
  }
}
