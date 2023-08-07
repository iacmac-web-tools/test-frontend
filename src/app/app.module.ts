import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, AppRoutingModule, ],
  declarations: [ AppComponent, FirstComponent, SecondComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [],
})
export class AppModule { }
