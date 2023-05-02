import {Person} from "../../../../domain/models/person.model";

export interface ThesisEntity {
  id: number,
  mainAuthor: Person,
  contactEmail: string,
  otherAuthors: Array<Person>,
  topic: string,
  content: string,
  created: Date,
  updated: Date
}
