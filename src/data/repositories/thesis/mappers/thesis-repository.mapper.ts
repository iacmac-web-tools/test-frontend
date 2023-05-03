import {Mapper} from "../../../../base/utils/mapper";
import {ThesisEntity} from "../entities/thesis-entity";
import {Thesis} from "../../../../domain/models/thesis.model";

export class ThesisRepositoryMapper extends Mapper<ThesisEntity, Thesis> {
  mapFrom(param: ThesisEntity): Thesis {
    return {
      id: param.id,
      mainAuthor: param.mainAuthor,
      contactEmail: param.contactEmail,
      otherAuthors: param.otherAuthors,
      topic: param.topic,
      content: param.content,
      created: param.created,
      updated: param.updated
    }
  }

  mapTo(param: Thesis): ThesisEntity {
    return {
      id: param.id,
      mainAuthor: param.mainAuthor,
      contactEmail: param.contactEmail,
      otherAuthors: param.otherAuthors,
      topic: param.topic,
      content: param.content,
      created: param.created,
      updated: param.updated
    }
  }
}
