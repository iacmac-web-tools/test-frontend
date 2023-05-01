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
  error: Error = {
    name: '',
    message: ''
  };
  
  constructor(private thesisService: ThesisService){ }
    
  ngOnInit(){
    this.thesisService.getThesesAll().subscribe({
      next: (data: IBriefThesis[]) => {
        this.theses = data;
        this.isLoading = false;
      },
      error: (err: Error) => {
        this.error = {
          name: err.name,
          message: err.message,
        };
        this.isLoading = false;
      },
    });
  }
}
