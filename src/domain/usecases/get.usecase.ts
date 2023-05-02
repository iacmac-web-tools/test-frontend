import {UseCase} from "../base/use-case";
import {Thesis} from "../models/thesis.model";
import {ThesisRepository} from "../repositories/thesis.repository";
import {Observable} from "rxjs";

export class GetUseCase implements UseCase<{ id: number }, Thesis> {
  constructor(private readonly thesisRepository: ThesisRepository) {}

  execute(params: { id: number }): Observable<Thesis> {
    return this.thesisRepository.get(params);
  }
}
