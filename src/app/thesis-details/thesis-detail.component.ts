import {Component, OnInit} from '@angular/core';
import {GetUseCase} from "../../domain/usecases/get.usecase";
import {Thesis} from "../../domain/models/thesis.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../../domain/models/person.model";
import {DeleteUseCase} from "../../domain/usecases/delete.usecase";
import {ThesisEntity} from "../../data/repositories/thesis/entities/thesis-entity";

@Component({
  selector: 'app-thesis-details',
  templateUrl: './thesis-detail.component.html',
  styleUrls: ['./thesis-detail.component.scss']
})
export class ThesisDetailComponent implements OnInit {
  thesis?: ThesisEntity
  id?: number

  constructor(private route: ActivatedRoute,
              private get: GetUseCase,
              private router: Router,
              private deleteUseCase: DeleteUseCase) {}

  ngOnInit(): void {
    this.id = Number.parseInt(<string>this.route.snapshot.paramMap.get("id"));
    this.get.execute({id: this.id}).subscribe(value => this.thesis = value);
  }

  flattenPerson(person?: Person): string {
    if (person === undefined) return "loading";
    return `${person?.firstName} ${person?.middleName} ${person?.lastName}`;
  }

  deleteThesis(): void {
    if (this.id === undefined) return;
    this.deleteUseCase.execute({id: this.id}).subscribe(_ =>
      this.router.navigate(["/theses"]))
  }

  updateThesis() {
    if (this.id === undefined) return;
    this.router.navigate([`/thesis/edit/${this.id}`]);
  }
}
