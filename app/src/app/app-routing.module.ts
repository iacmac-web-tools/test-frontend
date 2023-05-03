import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddThesesComponent } from './pages/add-theses/add-theses.component';
import { DetailThesisComponent } from './pages/detail-thesis/detail-thesis.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addTheses', component: AddThesesComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: ':id', component: DetailThesisComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
