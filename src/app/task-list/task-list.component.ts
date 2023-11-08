import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input() tasks: any[] = [];
  @Output() taskChangeState = new EventEmitter<any>();

  changeTaskState(e: any, i: number) {
    var state = e.target.checked ? 'completada' : 'no completada';
    this.taskChangeState.emit({ index: i, state });
  }
}
