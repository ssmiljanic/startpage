import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  keyDownFunction(event) {
  if(event.keyCode == 13) {
    alert('you just clicked enter');
    //(keydown)="keyDownFunction($event)"
  }
}
}
