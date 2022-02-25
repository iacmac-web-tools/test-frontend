import { Person } from './person';

export class ThesesResource {
  constructor(
    public mainAuthor: Person,
    public contactEmail: string | null,
    public otherAuthors: Person[] | null,
    public topic: string,
    public content: string,
    public id?: number | null,
    public created?: string | null,
    public updated?: string | null
  ) {}
}
