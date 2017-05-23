import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ModalComponent } from './modal/modal.component';
import { GoogleComponent } from './google/google.component';
import { DateComponent } from './date/date.component';
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ModalComponent,
    GoogleComponent,
    DateComponent,
    NameComponent
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
