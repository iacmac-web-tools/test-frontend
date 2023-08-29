import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AllThesisComponent } from './all-thesis/all-thesis.component';
import {AppRoutingModule} from "./app-routing.module";
import { PostThesisComponent } from './post-thesis/post-thesis.component';

@NgModule({
  declarations: [
    AppComponent,
    AllThesisComponent,
    PostThesisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
