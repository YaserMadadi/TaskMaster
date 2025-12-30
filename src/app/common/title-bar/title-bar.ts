import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  imports: [],
  templateUrl: './title-bar.html',
  styleUrl: './title-bar.scss',
})
export class TitleBar {

  @Input()
  Title: string = 'Title';

  @Input()
  Message: string = 'Sub Title';
}
