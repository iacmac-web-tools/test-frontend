import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Thesis} from "../../domain/models/thesis.model";
import {FormGroupToThesisMapper} from "../FormGroupToThesisMapper";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-edit-thesis',
  templateUrl: './edit-thesis.component.html',
  styleUrls: ['./edit-thesis.component.scss']
})
export class EditThesisComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}

  private readonly mapper = new FormGroupToThesisMapper();
  thesisForm: FormGroup<{
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
  }> = this.createFormGroup();

  @Input() primaryButtonText = "Отправить"
  @Input() title = "Редактирование"
  @Input() initialState?: Observable<Thesis>;

  @Output() onSubmit = new EventEmitter<Thesis>;

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.initialState?.subscribe(value => {
      this.thesisForm = this.mapper.mapTo(value)
    });
  }

  createFormGroup() {
    return this.mapper.mapTo({} as unknown as Thesis);
  }

  submit() {
    if (this.thesisForm === undefined || this.thesisForm.invalid) return;
    const thesis = this.mapper.mapFrom(this.thesisForm);
    this.onSubmit.emit(thesis);
  }

  addOtherAuthor(): void {
    this.thesisForm?.controls.otherAuthors.push(
      new FormGroup({
        firstName: new FormControl("", Validators.required),
        middleName: new FormControl(""),
        lastName: new FormControl("", Validators.required),
        workplace: new FormControl("Test workplace", Validators.required),
      })
    );
  }

  removeOtherAuthor = (id: number) => this.thesisForm?.controls.otherAuthors.removeAt(id);
  resetForm = () => this.thesisForm?.reset();
  isControlsInvalidAndTouched = (controls: Array<FormControl>) => controls.some(x => x.invalid && x.touched);
}
