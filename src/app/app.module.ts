import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DataModule} from "../data/data.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    DataModule,
    NgbModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
