import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment/moment';

@Component({
  selector: 'name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  username = localStorage.getItem("NAME");

  night = 'Guten Abend ';
  day = 'Guten Tag ';
  morning = 'Guten Morgen ';


  hour = moment().format('HH');

}
