import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThesisService } from 'src/app/thesis.service';
import { IAuthor } from 'src/types/thesis';

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
  error = {
    status: '',
    message: '',
  };

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
    const {
      firstName,
      middleName,
      lastName,
      contactEmail,
      workplace,
      otherAuthors,
      topic,
      content,
    } = form.value;

    const pipeOtherAuthors = otherAuthors.map((otherAuthor: IAuthor) => ({
      ...otherAuthor,
      ...{ workplace },
    }));

    const pipeFormValue = {
      mainAuthor: {
        firstName,
        lastName,
        middleName,
        workplace,
      },
      contactEmail,
      otherAuthors: pipeOtherAuthors,
      topic,
      content,
    };

    this.thesisService.addThesis(pipeFormValue).subscribe({
      next: () => {
        this.ngForm?.resetForm();
        this._snackBar.open('Добавлено!', 'close');
      },
      error: data => {
        this.error = {
          status: data.error.status,
          message: (Object.values(data.error.errors)[0] as string[])[0],
        };
        this._snackBar.open(
          `${this.error.status} ${this.error.message}`,
          'close'
        );
      },
    });
  }

  resetForm() {
    this.ngForm?.resetForm();
  }
}
