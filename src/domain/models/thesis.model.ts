import {Person} from "./person.model";

export interface Thesis {
  id: number,
  mainAuthor: Person,
  contactEmail: string,
  otherAuthors: Array<Person>,
  topic: string,
  content: string,
  created: Date,
  updated: Date
}
