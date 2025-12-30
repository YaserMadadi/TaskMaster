import { Component, Input } from '@angular/core';
import { Task } from '../../../common/models/task';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {

  @Input()
  taskList: Task[] = [];

}
