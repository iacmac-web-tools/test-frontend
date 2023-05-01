import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBriefThesis} from '../types/thesis';
  
@Injectable()
export class ThesisService{
  url = "https://conf.antibiotic.ru/demo/api/theses/all";
  
  constructor(private http: HttpClient){ }
      
  getThesesAll(){
    return this.http.get<IBriefThesis[]>(this.url)
  }
}