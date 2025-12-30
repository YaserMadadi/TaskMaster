import { Component } from '@angular/core';
import { DataService } from '../../common/services/data.service';
import { Action } from '../../common/models/action';
import { SubAction } from '../../common/models/subAction';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { TitleBar } from '../../common/title-bar/title-bar';
import { Task } from '../../common/models/task';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-task',
  imports: [
    CommonModule,
    FormsModule,
    TitleBar,
    TaskList
  ],
  templateUrl: './tasker.html',
  styleUrl: './tasker.scss',
})
export class Tasker {

  currentTask: Task = new Task();

  taskList: Task[] = [];

  ActionList$!: Observable<Action[]>;
  SubActionList$!: Observable<SubAction[]>;

  filteredSubActions$!: Observable<SubAction[]>;

  // public SelectedAction: Action = new Action(1);
  // public SelectedSubAction: SubAction = new SubAction();

  constructor(private dataService: DataService) {
    this.ActionList$ = this.dataService.loadAction().pipe(
      map(actions => {
        if (actions.length > 0 && !this.currentTask.action) {
          this.currentTask.action = actions[0];
        }
        return actions;
      })
    );
    this.SubActionList$ = this.dataService.loadSubAction();
    this.filteredSubActions$ = new BehaviorSubject<SubAction[]>([]).asObservable();
  }

  onActionChange(action: Action) {
    // this.SelectedAction = value;
    console.log('Value : ', action);
    this.currentTask.action = action;
    //this.SelectedSubAction = null; // reset subAction

    // Filter subActionList$ based on selected action
    this.filteredSubActions$ = this.SubActionList$.pipe(
      map(list => {
        let result = list.filter(sub => sub.action_id === action.id);
        this.currentTask.subAction = result[0];
        return result;
      })
    );
  }

  saveTask() {

    let time: string = this.currentTask.to;
    console.log('Task : ', this.currentTask);
    this.taskList.push(this.currentTask);
    console.table(this.taskList);
    this.currentTask = new Task();
    this.currentTask.from = time;
  }
}
