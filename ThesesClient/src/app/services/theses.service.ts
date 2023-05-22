import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITheses, IThesesDetails} from "../models/theses";

@Injectable({
  providedIn: 'root'
})
export class ThesesService {
  url: string = 'https://conf.antibiotic.ru/demo/api/theses'
  constructor(private http: HttpClient) { }

  getTheses (){
    return this.http.get<IThesesDetails[]>(`${this.url}/all`);
  }

  getThesis(id: number) {
    return this.http.get<IThesesDetails>(`${this.url}/${id}`);
  }

  postThesis(thesis: IThesesDetails){
    return this.http.post<IThesesDetails>(this.url, thesis);
  }

  deleteThesis(id: number){
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  updateThesis(thesis: IThesesDetails){
    return this.http.put<IThesesDetails>(`${this.url}/${thesis.id}`, thesis);
  }
}
