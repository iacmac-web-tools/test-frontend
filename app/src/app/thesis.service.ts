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
  
  createThesis(thesis: IOutputThesis){
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<IOutputThesis>(this.url, JSON.stringify(thesis), {headers}); 
  }
}