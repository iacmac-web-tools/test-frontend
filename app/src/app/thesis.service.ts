import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IBriefThesis, IOutputThesis} from '../types/thesis';
  
@Injectable()
export class ThesisService{
  url = "https://conf.antibiotic.ru/demo/api/theses";
  
  constructor(private http: HttpClient){ }
      
  getThesesAll(){
    return this.http.get<IBriefThesis[]>(this.url + '/all')
  }
  
  getThesis(id: number){
    return this.http.get<IOutputThesis>(this.url + '/' + id)
  }
  
  addThesis(thesis: IOutputThesis){
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<IOutputThesis>(this.url, JSON.stringify(thesis), {headers}); 
  }

  updateThesis(id: number, thesis: IOutputThesis) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put<IOutputThesis>(this.url + '/' + id, JSON.stringify(thesis), {headers});
  }

  delThesis(id: number){
    return this.http.delete(this.url + '/' + id);
  }
}