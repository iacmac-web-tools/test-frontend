import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AllThesisComponent} from "./all-thesis/all-thesis.component";
import {AppComponent} from "./app.component";
import {PostThesisComponent} from "./post-thesis/post-thesis.component";

const routes: Routes = [
  {path: 'allThesis',component:AllThesisComponent},
  {path: 'postThesis',component:PostThesisComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
