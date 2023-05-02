import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateUseCase} from "../../domain/usecases/create.usecase";
import {Router} from "@angular/router";
import {Person} from "../../domain/models/person.model";

@Component({
  selector: 'app-create-thesis',
  templateUrl: './create-thesis.component.html',
  styleUrls: ['./create-thesis.component.scss']
})
export class CreateThesisComponent {
  ThesisForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    middleName: new FormControl(),
    lastName: new FormControl("", Validators.required),
    contactEmail: new FormControl("", Validators.email),
    workplace: new FormControl("", Validators.required),
    topic: new FormControl("", [Validators.required, Validators.maxLength(500)]),
    content: new FormControl("", [Validators.required, Validators.maxLength(5000)]),
    otherAuthors: new FormArray([
      new FormGroup({
        firstName: new FormControl("", Validators.required),
        middleName: new FormControl(""),
        lastName: new FormControl("", Validators.required),
        workplace: new FormControl("", Validators.required),
      })
    ])
  });

  constructor(private create: CreateUseCase, private router: Router) {}

  submit(): void {
    const params = {
      mainAuthor: {
        firstName: this.ThesisForm.controls.firstName.value || "",
        middleName: this.ThesisForm.controls.middleName.value || "",
        lastName: this.ThesisForm.controls.lastName.value || "",
        workplace: this.ThesisForm.controls.workplace.value || ""
      },
      contactEmail: this.ThesisForm.controls.contactEmail.value || "",
      otherAuthors: this.ThesisForm.controls.otherAuthors.value.map(x => {
        return {
          firstName: x.firstName,
          middleName: x.middleName,
          lastName: x.lastName,
          workplace: x.workplace || "test"
        }
      }) as Array<Person>,
      topic: this.ThesisForm.controls.topic.value || "",
      content: this.ThesisForm.controls.content.value || "",
    };
    console.log(params);
    this.create.execute(params).subscribe(value => this.router.navigate([`/thesis/${value.id}`]));
  }

  addAuthor(): void {
    let group = new FormGroup({
      firstName: new FormControl("", Validators.required),
      middleName: new FormControl(""),
      lastName: new FormControl("", Validators.required),
      workplace: new FormControl("", Validators.required),
    });
    this.ThesisForm.controls.otherAuthors.push(group);
  }

  removeElement(id: number): void {
    this.ThesisForm.controls.otherAuthors.removeAt(id);
  }

  resetForm(): void {
    this.ThesisForm.reset();
  }
}
