import {UseCase} from "../base/use-case";
import {ThesisRepository} from "../repositories/thesis.repository";
import {Observable} from "rxjs";

export class DeleteUseCase implements UseCase<{ id: number }, void> {
  constructor(private readonly thesisRepository: ThesisRepository) {}

  execute(params: { id: number }): Observable<void> {
    return this.thesisRepository.delete(params)
  }
}
