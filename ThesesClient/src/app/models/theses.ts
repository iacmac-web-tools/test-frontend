
export interface ITheses {
  id: number,
  mainAuthor: string,
  contactEmail: string,
  topic: string,
  created: string,
  updated: string
}

export interface  IThesesDetails {
  id: number,
  mainAuthor: IPerson,
  contactEmail: string,
  otherAuthors: IPerson[],
  topic: string,
  content: string,
  created: string,
  updated: string
}

export interface IPerson {
  firstName: string,
  lastName: string,
  middleName: string,
  workplace: string
}
