import { IAuthor, IOutputThesis } from '../types/thesis';

interface IForm {
  firstName: string;
  middleName: string;
  lastName: string;
  contactEmail: string;
  workplace: string;
  otherAuthors: IAuthor[];
  topic: string;
  content: string;
}

export default function transformForm(
  value: IForm,
  addWorkplaceOtherAuthors?: boolean
): IOutputThesis {
  const {
    firstName,
    middleName,
    lastName,
    contactEmail,
    workplace,
    otherAuthors,
    topic,
    content,
  } = value;

  const pipeOtherAuthors = otherAuthors.map((otherAuthor: IAuthor) => ({
    ...otherAuthor,
    ...{ workplace },
  }));

  return {
    mainAuthor: {
      firstName,
      lastName,
      middleName,
      workplace,
    },
    contactEmail,
    otherAuthors: addWorkplaceOtherAuthors ? pipeOtherAuthors : otherAuthors,
    topic,
    content,
  };
}
