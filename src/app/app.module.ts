import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { MaterialModule } from '../material.module';
import { AddThesesModule } from './view-modules/add-theses/add-theses.module';
import { ListThesesModule } from './view-modules/list-theses/list-theses.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home.component';
import { ListThesesComponent } from './pages/list-theses.component';
import { HttpService } from './view-modules/services/http.service';




// Определние маршрутов
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list-theses', component: ListThesesComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    ListThesesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    AddThesesModule,
    ListThesesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
