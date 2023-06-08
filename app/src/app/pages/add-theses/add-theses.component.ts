import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThesisService } from 'src/app/thesis.service';
import transformForm from 'src/utils/transform-form';

@Component({
  selector: 'app-add-theses',
  templateUrl: './add-theses.component.html',
  styleUrls: ['./add-theses.component.scss'],
})
export class AddThesesComponent implements OnInit {
  @ViewChild('ngForm')
  ngForm: NgForm | undefined;

  formGroup: FormGroup = new FormGroup({});
  otherAuthors: FormGroup[] = [];

  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private thesisService: ThesisService
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      firstName: [null, Validators.required],
      middleName: [null, Validators.required],
      lastName: [null, Validators.required],
      contactEmail: [null, [Validators.required, Validators.email]],
      workplace: [null, Validators.required],
      topic: [null, Validators.required],
      content: [null, Validators.required],
      otherAuthors: this.formBuilder.array(this.otherAuthors),
    });
  }

  addOtherAuthor() {
    this.otherAuthors.push(
      this.formBuilder.group({
        firstName: [null, Validators.required],
        middleName: [null, Validators.required],
        lastName: [null, Validators.required],
      })
    );

    this.formGroup = this.formBuilder.group({
      ...this.formGroup.controls,
      otherAuthors: this.formBuilder.array(this.otherAuthors),
    });
  }

  delOtherAuthor(index: number) {
    this.otherAuthors.splice(index, 1);

    this.formGroup = this.formBuilder.group({
      ...this.formGroup.controls,
      otherAuthors: this.formBuilder.array(this.otherAuthors),
    });
  }

  addThesis(form: FormGroup) {
    this.thesisService.addThesis(transformForm(form.value, true)).subscribe({
      next: () => {
        this.ngForm?.resetForm();
        this._snackBar.open('Добавлено!', 'close');
      },
      error: data => {
        this._snackBar.open(
          `${data.error.status} ${
            (Object.values(data.error.errors)[0] as string[])[0]
          }`,
          'close'
        );
      },
    });
  }

  resetForm() {
    this.ngForm?.resetForm();
  }
}
