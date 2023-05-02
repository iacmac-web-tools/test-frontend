import {Observable} from "rxjs";
import {ThesisRepository} from "../../../domain/repositories/thesis.repository";
import {Thesis} from "../../../domain/models/thesis.model";
import {Person} from "../../../domain/models/person.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ThesisShort} from "../../../domain/models/thesis-short.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ThesisWebRepository extends ThesisRepository {
  private readonly baseUrl = environment.apiUrl;
  private readonly API_ROUTES = {
    get: (id: number) => this.baseUrl + `/theses/${id}`,
    getAll: () => this.baseUrl + `/theses/all`,
    create: () => this.baseUrl + `/theses`,
    update: (id: number) => this.baseUrl + `/theses/${id}`,
    delete: (id: number) => this.baseUrl + `/theses/${id}`
  }

  constructor(private http: HttpClient) {
    super();
  }


  create(params: {
    mainAuthor: Person;
    contactEmail: string;
    otherAuthors: Array<Person>;
    topic: string;
    content: string
  }): Observable<Thesis> {
    return this.http.post<Thesis>(this.API_ROUTES.create(), params);
  }

  delete(params: { id: number }): Observable<void> {
    return this.http.delete<void>(this.API_ROUTES.delete(params.id));
  }

  get(params: { id: number }): Observable<Thesis> {
    return this.http.get<Thesis>(this.API_ROUTES.get(params.id));
  }

  getAll(): Observable<Array<ThesisShort>> {
    return this.http.get<Array<ThesisShort>>(this.API_ROUTES.getAll());
  }

  update(params: {
    id: number;
    mainAuthor: Person;
    contactEmail: string;
    otherAuthors: Array<Person>;
    topic: string;
    content: string
  }): Observable<Thesis> {
    const {id: _, ...updateParams} = params;
    return this.http.put<Thesis>(this.API_ROUTES.update(params.id), updateParams);
  }
}
