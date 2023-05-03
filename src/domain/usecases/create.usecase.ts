import {UseCase} from "../base/use-case";
import {Person} from "../models/person.model";
import {Observable} from "rxjs";
import {ThesisRepository} from "../repositories/thesis.repository";
import {Thesis} from "../models/thesis.model";
import {ThesisEntity} from "../../data/repositories/thesis/entities/thesis-entity";

export class CreateUseCase implements UseCase<{
  mainAuthor: Person,
  contactEmail: string,
  otherAuthors: Array<Person>,
  topic: string,
  content: string
}, ThesisEntity> {
  constructor(private readonly thesisRepository: ThesisRepository) {}

  execute(params: {
    mainAuthor: Person;
    contactEmail: string;
    otherAuthors: Array<Person>;
    topic: string;
    content: string
  }): Observable<ThesisEntity> {
    return this.thesisRepository.create(params);
  }
}
