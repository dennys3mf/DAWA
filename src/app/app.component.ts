import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: any[] = [];
  cacheTasks: any[] = [];

  addTask(task: any) {
    this.tasks.push(task);
    this.cacheTasks.push(task)
  }

  changeTaskState(taskToChange: any) {
    const { index, state } = taskToChange;
    this.tasks[index].estado = state;
    this.cacheTasks[index].estado = state;
  }

  applyingFilter (value: any) {
    if (this.cacheTasks != this.tasks) this.tasks = this.cacheTasks
    if (value == "Todas") return
    this.tasks = this.tasks.filter((i)=>
      i.estado == value && i
    )
  }
}
