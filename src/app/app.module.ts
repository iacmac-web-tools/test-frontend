import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DataModule} from "../data/data.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {EditThesisComponent} from './edit-thesis/edit-thesis.component';
import {ThesesComponent} from './theses/theses.component';
import {ThesisDetailComponent} from './thesis-details/thesis-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CreateThesisComponent} from './create-thesis/create-thesis.component';
import {FieldErrorComponent} from './field-error/field-error.component';
import {UpdateThesisComponent} from './update-thesis/update-thesis.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateThesisComponent},
  {path: 'theses', component: ThesesComponent},
  {path: 'thesis/:id', component: ThesisDetailComponent},
  {path: 'thesis/edit/:id', component: UpdateThesisComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EditThesisComponent,
    ThesesComponent,
    ThesisDetailComponent,
    CreateThesisComponent,
    FieldErrorComponent,
    UpdateThesisComponent,
  ],
  imports: [
    BrowserModule,
    DataModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
