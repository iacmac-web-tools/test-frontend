import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {IPerson} from "../../models/theses";

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit{
  myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    topic: new FormControl(this.data?.topic ?? '', Validators.required),
    content: new FormControl(this.data?.content ?? '', Validators.required),
    firstName: new FormControl(this.data?.firstName ?? '', Validators.required),
    lastName: new FormControl(this.data?.lastName ?? '', Validators.required),
    middleName: new FormControl(this.data?.middleName ?? ''),
    workplace: new FormControl(this.data?.workplace ?? '', Validators.required),
    contactEmail: new FormControl(this.data?.contactEmail ?? '', Validators.required),
    otherAuthors: new FormControl(this.data?.otherAuthors ?? '')
  })

  isNew: boolean = true;
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if(this.data) this.isNew = false;
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit(){
    this.data = {
      id: this.myForm.value.id,
      mainAuthor: {
        firstName: this.myForm.value.firstName,
        lastName: this.myForm.value.lastName,
        middleName: this.myForm.value.middleName,
        workplace: this.myForm.value.workplace
    },
      contactEmail: this.myForm.value.contactEmail,
      otherAuthors: [],
      topic: this.myForm.value.topic,
      content: this.myForm.value.content
    };


    this.dialogRef.close(this.data);
  }
  ngOnInit(): void {
  }
}
