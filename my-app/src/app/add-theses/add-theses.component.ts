import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { first } from 'rxjs';
import {ThesesService} from '../theses.service'

@Component({
  selector: 'app-add-theses',
  templateUrl: './add-theses.component.html',
  styleUrls: ['./add-theses.component.css']
})
export class AddThesesComponent implements OnInit {
  alert:boolean=false
  AutorTwo:boolean=false
  addResto = new FormGroup({
    mainAuthor: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      middleName: new FormControl('', Validators.required),
      workplace: new FormControl('', Validators.required),
      contactEmail: new FormControl('', Validators.required) 
  }),
  
  otherAuthors: new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    middleName: new FormControl('')
  
  }),
  topic:new FormControl('', Validators.required),
  content: new FormControl('', Validators.required)
  })
  
  
  
  constructor(private theses: ThesesService) { }

  ngOnInit(): void {
  }
  collectTheses()
  {
   
    this.theses.saveTheses(this.addResto.value).subscribe((result)=>{
      this.alert=true
      this.clearForm()
    })
    
  }
  closeAlert(){
    this.alert=false
  }
  clearForm(){
    this.addResto.reset({})
  }
  deleteAutorForm(){
    this.AutorTwo=false
     
   }
  AddNewAutor(){
    this.AutorTwo=true
  }

  get _client() {
    return this.addResto.get('topic')
  }
}
