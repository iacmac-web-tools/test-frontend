import {Component, OnInit} from '@angular/core';
import {Thesis} from "../../domain/models/thesis.model";
import {Observable} from "rxjs";
import {GetUseCase} from "../../domain/usecases/get.usecase";
import {ActivatedRoute, Router} from "@angular/router";
import {UpdateUseCase} from "../../domain/usecases/update.usecase";

@Component({
  selector: 'app-update-thesis',
  templateUrl: './update-thesis.component.html',
  styleUrls: ['./update-thesis.component.scss']
})
export class UpdateThesisComponent implements OnInit {
  constructor(private route: ActivatedRoute, private get: GetUseCase, private update: UpdateUseCase, private router: Router) {}

  id?: number;
  thesis?: Observable<Thesis>;

  ngOnInit(): void {
    this.id = Number.parseInt(<string>this.route.snapshot.paramMap.get("id"));
    this.thesis = this.get.execute({id: this.id})
  }

  submit($event: Thesis) {
    if (this.id === undefined) return;
    const params = {id: this.id, ...$event};
    this.update.execute(params).subscribe(_ => {
      this.router.navigate([`/thesis/${this.id}`])
    })
  }
}
