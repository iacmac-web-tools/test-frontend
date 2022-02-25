import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListMainComponent } from './list-main.component';
import { MaterialModule } from '../../../material.module';
import { TableComponent } from './table/table.component';
import { ItemTableExpansionComponent } from './item-table-expansion/item-table-expansion.component';


@NgModule({
  declarations: [
    ListMainComponent,
    TableComponent,
    ItemTableExpansionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ListMainComponent
  ]
})
export class ListThesesModule { }
