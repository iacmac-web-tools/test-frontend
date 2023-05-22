import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseComponent} from "./components/base/base.component";
import {ThesesComponent} from "./components/theses/theses.component";
import {ThesisDetailsComponent} from "./components/thesis-details/thesis-details.component";
import {ThesisResolver} from "./services/thesis.resolver";

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'theses', component: ThesesComponent},
  {path: 'theses/:id', component: ThesisDetailsComponent, resolve: {data: ThesisResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
