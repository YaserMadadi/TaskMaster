import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './common/services/data.service';
import { Action } from './common/models/action';
import { SubAction } from './common/models/subAction';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Tasker } from './components/tasker/tasker';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { TitleBar } from './common/title-bar/title-bar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    TitleBar,
    Header,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('DailyTask');


}
