import {UseCase} from "../base/use-case";
import {Person} from "../models/person.model";
import {Observable} from "rxjs";
import {ThesisRepository} from "../repositories/thesis.repository";
import {Thesis} from "../models/thesis.model";

export class CreateUseCase implements UseCase<{
  mainAuthor: Person,
  contactEmail: string,
  otherAuthors: Array<Person>,
  topic: string,
  content: string
}, Thesis> {
  constructor(private readonly thesisRepository: ThesisRepository) {}

  execute(params: {
    mainAuthor: Person;
    contactEmail: string;
    otherAuthors: Array<Person>;
    topic: string;
    content: string
  }): Observable<Thesis> {
    return this.thesisRepository.create(params);
  }
}
