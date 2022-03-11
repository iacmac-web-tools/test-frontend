import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AllThesisesFormComponent } from './all-thesises-form/all-thesises-form.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonResourceFormComponent } from './person-resource-form/person-resource-form.component';
import { ThesisFormComponent } from './thesis-form/thesis-form.component';
import { ThesisesService } from './shared/thesises.service';

const appRoutes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-thesises-form', component: AllThesisesFormComponent },
  { path: 'thesis-form', component: ThesisFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AllThesisesFormComponent,
    HomeComponent,
    NotFoundComponent,
    PersonResourceFormComponent,
    ThesisFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ThesisesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
