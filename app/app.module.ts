import { FormComponent } from './form.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent,FormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
