import { PersonResource } from './personresource';

export class ThesisResource {

  constructor(
    public id: number,
    public mainAuthor: PersonResource,
    public otherAuthors: PersonResource [],
    public contactEmail?: string,
    public topic?: string,
    public content?: string,
    public created?: Date,
    public updated?: Date
  ) { }

}