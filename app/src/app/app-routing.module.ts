import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddThesesComponent } from './pages/add-theses/add-theses.component';
import { DetailThesisComponent } from './pages/detail-thesis/detail-thesis.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '/test-frontend/', component: HomeComponent },
  { path: '/test-frontend/addTheses', component: AddThesesComponent },
  { path: '/test-frontend/notFound', component: NotFoundComponent },
  { path: '/test-frontend/:id', component: DetailThesisComponent },
  { path: '/test-frontend/**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
