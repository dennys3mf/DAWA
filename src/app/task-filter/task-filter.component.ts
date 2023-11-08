import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {

  @Output() filteringTasks = new EventEmitter<any>();

  filterTasks(e: any) {
    this.filteringTasks.emit(e.target.value);
  }
}
