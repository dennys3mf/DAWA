import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  taskName: string = '';
  // taskState: string = 'no completada';

  @Output() taskAdded = new EventEmitter<any>();

  addTask() {
    this.taskAdded.emit({ nombre: this.taskName, estado: this.taskAdded });
    this.taskName = '';
    // this.taskState = 'no completada';
  }

}
