import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
    },
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
  selector: 'app-post-thesis',
  templateUrl: './post-thesis.component.html',
  styleUrls: ['./post-thesis.component.css']
})
export class PostThesisComponent implements OnInit {
  title = 'angular_firstProject';
  last_name = ""
  first_name = ""
  father_name = ""
  Email = ""
  job = ""
  last_name_otherAuthor = ""
  first_name_otherAuthor = ""
  father_name_otherAuthor = ""
  last_name_otherAuthor_2 = ""
  first_name_otherAuthor_2 = ""
  father_name_otherAuthor_2 = ""
  theme = ""
  description = ""

  error = ""

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  addThesis() {
    const newThesis: Thesis_Post = {
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
        {
          firstName: this.first_name_otherAuthor_2,
          lastName: this.last_name_otherAuthor_2,
          middleName: this.father_name_otherAuthor_2,
          workplace: "Not specified"
        }
      ],
      topic: this.theme,
      content: this.description
    }
    this.http.post('https://conf.antibiotic.ru/demo/api/theses', newThesis)
      .subscribe(
        {
          next: response => console.log(response),
          error: err => {
            this.error = err.message
          }
        }
      )
    this.last_name = ""
    this.first_name = ``
    this.father_name = ""
    this.Email = ""
    this.job = ""
    this.last_name_otherAuthor = ""
    this.first_name_otherAuthor = ""
    this.father_name_otherAuthor = ""
    this.last_name_otherAuthor_2 = ""
    this.first_name_otherAuthor_2 = ""
    this.father_name_otherAuthor_2 = ""
    this.theme = ""
    this.description = ""
  }

  clearText() {
    this.last_name = ""
    this.first_name = ""
    this.father_name = ""
    this.Email = ""
    this.job = ""
    this.last_name_otherAuthor = ""
    this.first_name_otherAuthor = ""
    this.father_name_otherAuthor = ""
    this.last_name_otherAuthor_2 = ""
    this.first_name_otherAuthor_2 = ""
    this.father_name_otherAuthor_2 = ""
    this.theme = ""
    this.description = ""
  }

}
