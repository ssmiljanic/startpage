import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ModalComponent } from './modal/modal.component';
import { GoogleComponent } from './google/google.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ModalComponent,
    GoogleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
