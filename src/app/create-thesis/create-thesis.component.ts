import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {Person} from "../../domain/models/person.model";
import {CreateUseCase} from "../../domain/usecases/create.usecase";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-thesis',
  templateUrl: './create-thesis.component.html',
  styleUrls: ['./create-thesis.component.scss']
})
export class CreateThesisComponent {

  constructor(private create: CreateUseCase, private router: Router) {}

  submit($event: FormGroup<{
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    contactEmail: FormControl<string | null>;
    topic: FormControl<string | null>;
    middleName: FormControl<any>;
    otherAuthors: FormArray<FormGroup<{
      firstName: FormControl<string | null>;
      lastName: FormControl<string | null>;
      middleName: FormControl<string | null>;
      workplace: FormControl<string | null>
    }>>;
    workplace: FormControl<string | null>;
    content: FormControl<string | null>
  }>): void {
    const params = {
      mainAuthor: {
        firstName: $event.controls.firstName.value || "",
        middleName: $event.controls.middleName.value || "",
        lastName: $event.controls.lastName.value || "",
        workplace: $event.controls.workplace.value || ""
      },
      contactEmail: $event.controls.contactEmail.value || "",
      otherAuthors: $event.controls.otherAuthors.value.map(x => {
        return {
          firstName: x.firstName,
          middleName: x.middleName,
          lastName: x.lastName,
          workplace: x.workplace || "test"
        }
      }) as Array<Person>,
      topic: $event.controls.topic.value || "",
      content: $event.controls.content.value || "",
    };
    this.create.execute(params).subscribe(value => this.router.navigate([`/thesis/${value.id}`]));
  }
}
