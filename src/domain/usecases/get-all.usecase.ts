import {UseCase} from "../base/use-case";
import {ThesisShort} from "../models/thesis-short.model";
import {Observable} from "rxjs";
import {ThesisRepository} from "../repositories/thesis.repository";

export class GetAllUseCase implements UseCase<void, Array<ThesisShort>> {
  constructor(private readonly thesisRepository: ThesisRepository) {}

  execute(params: void): Observable<Array<ThesisShort>> {
    return this.thesisRepository.getAll();
  }
}
