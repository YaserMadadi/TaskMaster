import { Injectable } from "@angular/core";
import { Action } from "../../common/models/action";
import { HttpClient } from "@angular/common/http";
import { SubAction } from "../../common/models/subAction";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DataService {

  constructor(private http: HttpClient) {

  }

  loadAction(): Observable<Action[]> {
    return this.http.get<Action[]>('assets/data/action.json');
  }

  loadSubAction(): Observable<SubAction[]> {
    return this.http.get<SubAction[]>('assets/data/sub-action.json');
  }
}