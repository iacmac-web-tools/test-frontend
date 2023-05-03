import {Person} from "./person.model";

export interface Thesis {
  mainAuthor: Person,
  contactEmail: string,
  otherAuthors: Array<Person>,
  topic: string,
  content: string
}
