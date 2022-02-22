import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddThesesComponent} from './add-theses/add-theses.component';
import {ListThesesComponent} from './list-theses/list-theses.component';
import {UpThesesComponent} from './up-theses/up-theses.component';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    AddThesesComponent,
    UpThesesComponent,
    ListThesesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
