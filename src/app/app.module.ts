import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { DialogContent } from './appDialog';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    DialogContent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  providers: [],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
