import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ThesesService } from '../theses.service';
@Component({
  selector: 'app-up-theses',
  templateUrl: './up-theses.component.html',
  styleUrls: ['./up-theses.component.css']
})
export class UpThesesComponent implements OnInit {
  alert:boolean=false
  editResto = new FormGroup({
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
  
  constructor(private router: ActivatedRoute, private theses:ThesesService) { }

  ngOnInit(): void {
    
this.theses.getCurrentTheses(this.router.snapshot.params['id']).subscribe((result:any)=>{
console.warn("result", result)

this.editResto = new FormGroup({
  mainAuthor: new FormGroup({
    firstName: new FormControl(result.mainAuthor['firstName'], Validators.required),
    lastName: new FormControl(result.mainAuthor['lastName'], Validators.required),
    middleName: new FormControl(result.mainAuthor['middleName'], Validators.required),
    workplace: new FormControl(result.mainAuthor['workplace'], Validators.required),
    contactEmail: new FormControl(result.mainAuthor['contactEmail'], Validators.required) 
}),

otherAuthors: new FormGroup({
  firstName: new FormControl(result.otherAuthors['firstName']),
  lastName: new FormControl(result.otherAuthors['lastName']),
  middleName: new FormControl(result.otherAuthors['middleName'])

}),
topic:new FormControl(result['topic'], Validators.required),
content: new FormControl(result['content'], Validators.required)
})
})
  }
collection(){
  
  this.theses.putTheses(this.router.snapshot.params['id'],this.editResto.value).subscribe((result)=>{
console.warn(result)
  })
  
}
closeAlert(){
  this.alert=false
}

}
