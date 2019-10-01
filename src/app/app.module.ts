import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ExampleFormComponent } from './example-form/example-form.component'

@NgModule({
  declarations: [
    AppComponent,
    ExampleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
