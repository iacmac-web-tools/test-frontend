import {Component, OnInit} from '@angular/core';
import {GetAllUseCase} from "../../domain/usecases/get-all.usecase";
import {ThesisShort} from "../../domain/models/thesis-short.model";

@Component({
  selector: 'app-theses',
  templateUrl: './theses.component.html',
  styleUrls: ['./theses.component.scss']
})
export class ThesesComponent implements OnInit {
  theses?: Array<ThesisShort>;

  constructor(private getAll: GetAllUseCase) {}

  ngOnInit(): void {
    this.getAll.execute().subscribe(value => this.theses = value);
  }
}
