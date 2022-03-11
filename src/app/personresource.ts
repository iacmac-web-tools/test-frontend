export class PersonResource {

  constructor(
    public firstName: string,
    public lastName: string,
    public workplace: string,
    public middleName?: string
  ) {  }

}