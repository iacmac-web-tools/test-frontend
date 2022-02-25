import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddMainComponent } from './add-main/add-main.component';
import { MaterialModule } from '../../../material.module';



@NgModule({
  declarations: [
    AddMainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [AddMainComponent]
})
export class AddThesesModule { }
