import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Csci160 = COURSES[0];
  Csci161 = COURSES[1];
  Csci513 = COURSES[2];
  Csci313 = COURSES[3];
}
