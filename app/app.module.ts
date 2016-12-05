import { FormComponent } from './form.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {ToastyModule} from 'ng2-toasty';
@NgModule({
  imports:      [ BrowserModule,FormsModule, ReactiveFormsModule, ToastyModule.forRoot() ],
  declarations: [ AppComponent,FormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

