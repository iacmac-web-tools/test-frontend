import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DataModule} from "../data/data.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {CreateThesisComponent} from './create-thesis/create-thesis.component';
import {ThesesComponent} from './theses/theses.component';
import {ThesisDetailComponent} from './theses-details/thesis-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateThesisComponent},
  {path: 'theses', component: ThesesComponent},
  {path: 'thesis/:id', component: ThesisDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateThesisComponent,
    ThesesComponent,
    ThesisDetailComponent,
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
