import { SelectColorComponent } from './select-color/select-color.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectColorComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
