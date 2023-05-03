import { Component, OnInit } from '@angular/core';
import { ThesisService} from '../../thesis.service';
import {IBriefThesis} from '../../../types/thesis';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  theses: IBriefThesis[] = []; 
  isLoading = true;
  error = {
    status: '',
    message: ''
  };
  
  constructor(private thesisService: ThesisService){ }
    
  ngOnInit(){
    this.thesisService.getThesesAll().subscribe({
      next: (data: IBriefThesis[]) => {
        this.theses = data;
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
