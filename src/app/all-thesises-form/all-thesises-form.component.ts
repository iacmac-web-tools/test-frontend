import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-thesises-form',
  templateUrl: './all-thesises-form.component.html',
  styleUrls: ['./all-thesises-form.component.css']
})

export class AllThesisesFormComponent {
  id: number;
  responseID: any;
  response: any;

  constructor(private http: HttpClient) {}

  search() {
    this.http.get('https://conf.antibiotic.ru/demo/api/theses/' + this.id)
      .subscribe((responseID)=>{
        this.responseID = responseID;
        console.log(this.responseID);
      })
  }
  allThesises() {
    this.http.get('https://conf.antibiotic.ru/demo/api/theses/all/')
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })
  }
}
