import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddThesisComponent } from './componentes/add-thesis/add-thesis.component';
import { AllThesisComponent } from './componentes/all-thesis/all-thesis.component';
import { SelectedThesisComponent } from './componentes/selected-thesis/selected-thesis.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

const routes: Routes = [
  {path: 'Add', component: AddThesisComponent},
  {path: 'All', component: AllThesisComponent},
  {path: 'id/:id', component: SelectedThesisComponent},

  {path: '', redirectTo: 'All', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
