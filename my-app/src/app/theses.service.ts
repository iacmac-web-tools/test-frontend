import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ThesesService {
url="http://localhost:3000/theses"
  constructor(private http:HttpClient) { }
  getList(){
   return this.http.get(this.url);
  }
  saveTheses(data: any = [])
  {
   
    return this.http.post(this.url,data)
  }
  deleteTheses(id:any[]){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentTheses(id:any[]){
    return this.http.get(`${this.url}/${id}`)
  }
  putTheses(id:any[], data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
