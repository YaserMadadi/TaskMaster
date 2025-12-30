import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';

@Component({
  selector: 'app-master',
  imports: [
    Hero,
    About,
  ],
  templateUrl: './master.html',
  styleUrl: './master.scss',
})
export class Master {

}
