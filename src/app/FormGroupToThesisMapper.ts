import {Mapper} from "../base/utils/mapper";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Thesis} from "../domain/models/thesis.model";
import {Person} from "../domain/models/person.model";

export class FormGroupToThesisMapper extends Mapper<FormGroup<{
  firstName: FormControl<string | null>,
  lastName: FormControl<string | null>,
  contactEmail: FormControl<string | null>,
  topic: FormControl<string | null>,
  middleName: FormControl<any>,
  otherAuthors: FormArray<FormGroup<{
    firstName: FormControl<string | null>,
    lastName: FormControl<string | null>,
    middleName: FormControl<string | null>,
    workplace: FormControl<string | null>
  }>>,
  workplace: FormControl<string | null>,
  content: FormControl<string | null>
}>, Thesis>{
  mapFrom(param: FormGroup<{
    firstName: FormControl<string | null>,
    lastName: FormControl<string | null>,
    contactEmail: FormControl<string | null>,
    topic: FormControl<string | null>,
    middleName: FormControl<any>,
    otherAuthors: FormArray<FormGroup<{
      firstName: FormControl<string | null>,
      lastName: FormControl<string | null>,
      middleName: FormControl<string | null>,
      workplace: FormControl<string | null>
    }>>,
    workplace: FormControl<string | null>,
    content: FormControl<string | null>
  }>): Thesis {
    const otherAuthors = param.controls.otherAuthors.value.map(x => {
      return {
        firstName: x.firstName,
        middleName: x.middleName,
        lastName: x.lastName,
        workplace: x.workplace
      } as Person
    }) as Array<Person>;
    return {
      mainAuthor: {
        firstName: param.controls.firstName.value,
        middleName: param.controls.middleName.value,
        lastName: param.controls.lastName.value,
        workplace: param.controls.workplace.value
      },
      contactEmail: param.controls.contactEmail.value,
      otherAuthors: otherAuthors,
      topic: param.controls.topic.value,
      content: param.controls.content.value
    } as Thesis;
  }

  mapTo(param: Thesis): FormGroup {
    return new FormGroup({
      firstName: new FormControl("", Validators.required),
      middleName: new FormControl(),
      lastName: new FormControl("", Validators.required),
      contactEmail: new FormControl("", [Validators.required, Validators.email]),
      workplace: new FormControl("", Validators.required),
      topic: new FormControl("", [Validators.required, Validators.maxLength(500)]),
      content: new FormControl("", [Validators.required, Validators.maxLength(5000)]),
      otherAuthors: new FormArray([
        new FormGroup({
          firstName: new FormControl("", Validators.required),
          middleName: new FormControl(""),
          lastName: new FormControl("", Validators.required),
          workplace: new FormControl("Test workplace", Validators.required),
        })
      ])
    });
  }
}
