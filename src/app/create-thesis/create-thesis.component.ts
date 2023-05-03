import {Component} from '@angular/core';
import {CreateUseCase} from "../../domain/usecases/create.usecase";
import {Router} from "@angular/router";
import {Thesis} from "../../domain/models/thesis.model";

@Component({
  selector: 'app-create-thesis',
  templateUrl: './create-thesis.component.html',
  styleUrls: ['./create-thesis.component.scss']
})
export class CreateThesisComponent {

  constructor(private create: CreateUseCase, private router: Router) {}

  submit($event: Thesis): void {
    this.create.execute($event).subscribe(value => this.router.navigate([`/thesis/${value.id}`]));
  }
}
