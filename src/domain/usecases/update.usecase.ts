import {Person} from "../models/person.model";
import {UseCase} from "../base/use-case";
import {Thesis} from "../models/thesis.model";
import {ThesisRepository} from "../repositories/thesis.repository";
import {Observable} from "rxjs";
import {ThesisEntity} from "../../data/repositories/thesis/entities/thesis-entity";

export class UpdateUseCase implements UseCase<{
  id: number,
  mainAuthor: Person,
  contactEmail: string,
  otherAuthors: Array<Person>,
  topic: string,
  content: string
}, Thesis> {
  constructor(private readonly thesisRepository: ThesisRepository) {}

  execute(params: {
    id: number;
    mainAuthor: Person;
    contactEmail: string;
    otherAuthors: Array<Person>;
    topic: string;
    content: string
  }): Observable<ThesisEntity> {
    return this.thesisRepository.update(params);
  }
}
