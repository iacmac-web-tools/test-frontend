import {Observable} from "rxjs";
import {Thesis} from "../models/thesis.model";
import {ThesisShort} from "../models/thesis-short.model";
import {Person} from "../models/person.model";
import {ThesisEntity} from "../../data/repositories/thesis/entities/thesis-entity";

export abstract class ThesisRepository {
  abstract get(params: { id: number }): Observable<ThesisEntity>

  abstract getAll(): Observable<Array<ThesisShort>>

  abstract create(params: {
    mainAuthor: Person,
    contactEmail: string,
    otherAuthors: Array<Person>,
    topic: string,
    content: string
  }): Observable<ThesisEntity>

  abstract update(params: {
    id: number, mainAuthor: Person,
    contactEmail: string,
    otherAuthors: Array<Person>,
    topic: string,
    content: string
  }): Observable<Thesis>

  abstract delete(params: { id: number }): Observable<void>;
}
