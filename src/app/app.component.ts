import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 showGoogle: boolean;
  
   constructor() {
        this.showGoogle = true;
    }
  
  @ViewChild('closeModal') closeModal: ElementRef;
  
  modalClose() {
    this.closeModal.nativeElement.click();
  }
  
    toggleGoogle(){
        if(this.showGoogle == true){
            this.showGoogle = false;
        } else {
        this.showGoogle = true;
        }
}
 }