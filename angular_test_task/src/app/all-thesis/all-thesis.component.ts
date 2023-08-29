import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Thesis {
  id: number,
  mainAuthor: string,
  topic: string,
  contactEmail: string
}

export interface FullInfoThesis {
  id?: number,
  mainAuthor?: {
    firstName: string,
    lastName: string,
    middleName: string,
    workplace: string
  },
  contactEmail?: string,
  otherAuthors?: [
    {
      firstName: string,
      lastName: string,
      middleName: string,
      workplace: string
    }
  ],
  topic?: string,
  content?: string,
  created?: string,
  updated?: string
}

export interface Thesis_Post {
  mainAuthor: {
    firstName: string,
    lastName: string,
    middleName: string,
    workplace: string
  },
  contactEmail: string,
  otherAuthors: [
    {
      firstName: string,
      lastName: string,
      middleName: string,
      workplace: string
    }
  ],
  topic: string,
  content: string

}

@Component({
  selector: 'app-all-thesis',
  templateUrl: './all-thesis.component.html',
  styleUrls: ['./all-thesis.component.css']
})
export class AllThesisComponent implements OnInit {

  Theses: Thesis[] = []
  fullInfoThesis: FullInfoThesis = {}
  last_name = ""
  first_name = ""
  father_name = ""
  Email = ""
  job = ""
  last_name_otherAuthor = ""
  first_name_otherAuthor = ""
  father_name_otherAuthor = ""
  theme = ""
  description = ""

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Thesis[]>('https://conf.antibiotic.ru/demo/api/theses/all')
      .subscribe(response => {
        this.Theses = response
      })

  }

  ShowMoreInfo(id: number) {
    this.http.get<FullInfoThesis>(`https://conf.antibiotic.ru/demo/api/theses/${id}`)
      .subscribe(responseInfo => {
        this.fullInfoThesis = responseInfo
      })
  }

  SetId: number = 0

  ShowEditInfo(id: number) {
    this.SetId = id
  }

  EditInfo() {
    const EditThesis: Thesis_Post = {
      mainAuthor: {
        firstName: this.first_name,
        lastName: this.last_name,
        middleName: this.father_name,
        workplace: this.job
      },
      contactEmail: this.Email,
      otherAuthors: [
        {
          firstName: this.first_name_otherAuthor,
          lastName: this.last_name_otherAuthor,
          middleName: this.father_name_otherAuthor,
          workplace: "Not specified"
        },
      ],
      topic: this.theme,
      content: this.description
    }
    this.http.put(`https://conf.antibiotic.ru/demo/api/theses/${this.SetId}`, EditThesis).subscribe(response => console.log(response))
    this.last_name = ""
    this.first_name = ``
    this.father_name = ""
    this.Email = ""
    this.job = ""
    this.last_name_otherAuthor = ""
    this.first_name_otherAuthor = ""
    this.father_name_otherAuthor = ""
    this.theme = ""
    this.description = ""
  }
}


