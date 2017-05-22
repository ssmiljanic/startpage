import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @ViewChild('closeModal') closeModal: ElementRef;
  
  modalClose() {
    this.closeModal.nativeElement.click();
  }
  
}
