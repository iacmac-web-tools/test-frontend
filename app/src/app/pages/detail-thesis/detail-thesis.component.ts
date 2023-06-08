import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ThesisService } from 'src/app/thesis.service';
import { IOutputThesis } from 'src/types/thesis';
import transformForm from 'src/utils/transform-form';

@Component({
  selector: 'app-detail-thesis',
  templateUrl: './detail-thesis.component.html',
  styleUrls: ['./detail-thesis.component.scss'],
})
export class DetailThesisComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  otherAuthors: FormGroup[] = [];
  thesis: IOutputThesis = {
    mainAuthor: {
      firstName: '',
      middleName: '',
      lastName: '',
      workplace: '',
    },
    contactEmail: '',
    otherAuthors: [],
    topic: '',
    content: '',
  };
  isLoading = true;
  isEdited = false;
  id: number;

  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private thesisService: ThesisService
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.thesisService.getThesis(this.id).subscribe({
      next: (data: IOutputThesis) => {
        this.thesis = data;

        data.otherAuthors.forEach(otherAuthor => {
          this.otherAuthors.push(
            this.formBuilder.group({
              firstName: [otherAuthor?.firstName, Validators.required],
              middleName: [otherAuthor?.middleName, Validators.required],
              lastName: [otherAuthor?.lastName, Validators.required],
              workplace: [otherAuthor?.workplace, Validators.required],
            })
          );
        });

        this.formGroup = this.formBuilder.group({
          firstName: [data.mainAuthor.firstName, Validators.required],
          middleName: [data.mainAuthor.middleName, Validators.required],
          lastName: [data.mainAuthor.lastName, Validators.required],
          contactEmail: [
            data.contactEmail,
            [Validators.required, Validators.email],
          ],
          workplace: [data.mainAuthor.workplace, Validators.required],
          topic: [data.topic, Validators.required],
          content: [data.content, Validators.required],
          otherAuthors: this.formBuilder.array(this.otherAuthors),
        });

        this.isLoading = false;
      },
      error: () => {
        this.router.navigate(['notFound']);
      },
    });
  }

  editThesis() {
    this.isEdited = true;
  }

  cancelEditThesis() {
    this.isEdited = false;
  }

  saveEditThesis(form: FormGroup) {
    this.thesisService
      .updateThesis(this.id, transformForm(form.value))
      .subscribe({
        next: (data: IOutputThesis) => {
          this.thesis = data;
          this.isEdited = false;
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

  delThesis() {
    this.thesisService.delThesis(this.id).subscribe({
      next: () => {
        this.router.navigate(['']);
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
}
