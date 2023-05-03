export interface IBriefThesis {
  id: number;
  mainAuthor: string;
  contactEmail: string;
  topic: string;
  created: Date;
  updated: Date;
}

export interface IAuthor {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface IOutputThesis {
  mainAuthor: {
    firstName: string;
    middleName: string;
    lastName: string;
    workplace: string;
  }
  contactEmail: string;
  otherAuthors: Partial<IAuthor[]>
  topic: string;
  content: string;
}
