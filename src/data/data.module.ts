import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ThesisRepository} from "../domain/repositories/thesis.repository";
import {GetAllUseCase} from "../domain/usecases/get-all.usecase";
import {Thesis} from "../domain/models/thesis.model";
import {GetUseCase} from "../domain/usecases/get.usecase";
import {UpdateUseCase} from "../domain/usecases/update.usecase";
import {DeleteUseCase} from "../domain/usecases/delete.usecase";
import {CreateUseCase} from "../domain/usecases/create.usecase";
import {ThesisWebRepository} from "./repositories/thesis/thesis-web.repository";

const getAllUseCaseFactory = (thesisRepository: ThesisRepository) => new GetAllUseCase(thesisRepository);
export const getAllUseCaseProvider = {
  provide: GetAllUseCase,
  useFactory: getAllUseCaseFactory,
  deps: [ThesisRepository]
}

const getUseCaseFactory = (thesisRepository: ThesisRepository) => new GetUseCase(thesisRepository);
export const getUseCaseProvider = {
  provide: GetUseCase,
  useFactory: getUseCaseFactory,
  deps: [ThesisRepository]
}

const createUseCaseFactory = (thesisRepository: ThesisRepository) => new CreateUseCase(thesisRepository);
export const createUseCaseProvider = {
  provide: CreateUseCase,
  useFactory: createUseCaseFactory,
  deps: [ThesisRepository]
}

const updateUseCaseFactory = (thesisRepository: ThesisRepository) => new UpdateUseCase(thesisRepository);
export const updateUseCaseProvider = {
  provide: UpdateUseCase,
  useFactory: updateUseCaseFactory,
  deps: [ThesisRepository]
}

const deleteUseCaseFactory = (thesisRepository: ThesisRepository) => new DeleteUseCase(thesisRepository);
export const deleteUseCaseProvider = {
  provide: DeleteUseCase,
  useFactory: deleteUseCaseFactory,
  deps: [ThesisRepository]
}

@NgModule({
  providers: [
    createUseCaseProvider,
    getUseCaseProvider,
    getAllUseCaseProvider,
    updateUseCaseProvider,
    deleteUseCaseProvider,
    {
      provide: ThesisRepository,
      useClass: ThesisWebRepository
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DataModule {}
