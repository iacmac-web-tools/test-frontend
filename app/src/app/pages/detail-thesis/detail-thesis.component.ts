import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThesisService } from 'src/app/thesis.service';
import { IOutputThesis } from 'src/types/thesis';

@Component({
  selector: 'app-detail-thesis',
  templateUrl: './detail-thesis.component.html',
  styleUrls: ['./detail-thesis.component.scss']
})
export class DetailThesisComponent implements OnInit {
  thesis: IOutputThesis = {
    mainAuthor: {
      firstName: '',
      middleName: '',
      lastName: '',
      workplace: '',
    },
    contactEmail: '',
    otherAuthors: [],
    topic: '',
    content: '',
  }
  isLoading = true;
  id: number = 0
  error = {
    status: '',
    message: ''
  };

  constructor(private activateRoute: ActivatedRoute, private thesisService: ThesisService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(){
    this.thesisService.getThesis(this.id).subscribe({
      next: (data: IOutputThesis) => {
        this.thesis = data;
        this.isLoading = false;
      },
      error: (data) => {
        this.error = {
          status: data.error.status,
          message: (Object.values(data.error.errors)[0] as string[])[0],
        };
        this.isLoading = false;
      },
    });
  }
 }
