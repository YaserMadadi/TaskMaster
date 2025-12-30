import { Action } from "./action";
import { SubAction } from "./subAction";

export class Task {
  constructor() {

  }

  id: number = 0;
  action: Action = new Action();
  subAction: SubAction = new SubAction();
  from: string = '';
  to: string = '';
  quantity: number = 0;
  comment: string = '';
}