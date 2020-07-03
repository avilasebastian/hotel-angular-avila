import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, componentes } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgControl } from '@angular/forms'
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import { MyDatePickerModule, MyDatePicker } from 'mydatepicker'
@NgModule({
  declarations: [
    AppComponent,
    componentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbRatingModule,
    MyDatePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
