import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateUseCase} from "../../domain/usecases/create.usecase";
import {Router} from "@angular/router";
import {Person} from "../../domain/models/person.model";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-edit-thesis',
  templateUrl: './edit-thesis.component.html',
  styleUrls: ['./edit-thesis.component.scss']
})
export class EditThesisComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}

  ThesisForm = this.createFormGroup();

  @Input() primaryButtonText = "Отправить"
  @Input() title = "Редактирование"

  @Output() onSubmit = new EventEmitter<FormGroup<{
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
  }>>;

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  createFormGroup(): FormGroup<{
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
  }> {
    return new FormGroup({
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
  }

  submit = () => this.onSubmit.emit(this.ThesisForm);

  addAuthor(): void {
    this.ThesisForm.controls.otherAuthors.push(
      new FormGroup({
        firstName: new FormControl("", Validators.required),
        middleName: new FormControl(""),
        lastName: new FormControl("", Validators.required),
        workplace: new FormControl("", Validators.required),
      })
    );
  }

  removeElement = (id: number) => this.ThesisForm.controls.otherAuthors.removeAt(id);

  resetForm = () => this.ThesisForm.reset();
}
