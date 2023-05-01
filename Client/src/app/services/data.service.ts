import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tesis } from 'src/Tesis';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    apiPath = 'http://localhost:5019/api/'
  constructor(
    private http: HttpClient
  ) { }

  getAllTesises(){
    return this.http.get(this.apiPath + 'theses/all')
  }

  getTesis(id: string | null){
    if(id == null) alert('Id не уставновлен!')
    return this.http.get(this.apiPath + 'theses/' + id)
  }

  deleteTesis(tesis: Tesis){
    return this.http.delete(this.apiPath + 'theses/'+ tesis.id)
  }

  getId(id: string){
    return Number(localStorage.getItem(id))
  }

  updateTesis(tesis: Tesis){
    return this.http.put(this.apiPath + 'theses/' + tesis.id , tesis)
  }

  addNewTesis(tesis: Tesis){
    return this.http.post(this.apiPath  + 'theses', tesis)
  }
}
