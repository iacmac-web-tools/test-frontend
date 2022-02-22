import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddThesesComponent} from './add-theses/add-theses.component';
import {ListThesesComponent} from './list-theses/list-theses.component';
import {UpThesesComponent} from './up-theses/up-theses.component';




const routes: Routes = [
{
  component:AddThesesComponent, path:'add'
},
{
  component:UpThesesComponent, path:'update/:id'
},
{
  component:ListThesesComponent, path:''
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
