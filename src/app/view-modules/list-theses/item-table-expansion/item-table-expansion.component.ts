import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ThesesResource } from '../../models/thesesResource';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-item-table-expansion',
  templateUrl: './item-table-expansion.component.html',
  styleUrls: ['./item-table-expansion.component.css'],
})
export class ItemTableExpansionComponent implements OnInit {


  isChangeBtnActive = true;
  isOpenBtnActive = true;

  myError: any;
  isError = false;

  @Input() theses!: ThesesResource;


  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

  }

  @ViewChild(MatAccordion) accordion!: MatAccordion;


  saveNewDataTheses(obj: ThesesResource) {
    this.httpService.putTheses(obj).subscribe(
      () => {},
      (error) => {
        this.myError = error.message;
        this.isError = true;
      }
    );
  }

}
