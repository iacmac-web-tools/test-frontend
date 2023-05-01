import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tesis } from 'src/Tesis';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-thesis',
  templateUrl: './add-thesis.component.html',
  styleUrls: ['./add-thesis.component.css']
})
export class AddThesisComponent implements OnInit{
  co_autors = [true, false, false]
  tesisForm!: FormGroup

  constructor(
    private dataService: DataService
  ){
  }

  addCo_autors(){
    for(let i = 0; i < this.co_autors.length; i++){
      if(!this.co_autors[i]){
        this.co_autors[i] = true
        break
      }
    }
  }

  submitTesis(){
    let co_autors: string = '';
    let autorFullName!: string
    autorFullName = this.tesisForm.value + ' ' + this.tesisForm.value.autorName + ' ' +this.tesisForm.value.autorSurname + ' ' + this.tesisForm.value.autorPatronymic
    if(this.tesisForm.value.co_auto1Name != ''){
      co_autors = this.tesisForm.value.co_auto1Name + ' ' +  this.tesisForm.value.co_auto1Surname+ ' ' + this.tesisForm.value.co_auto1Patronymic 
    }
    if(this.tesisForm.value.co_auto2Name != ''){
      co_autors +=  ', '+this.tesisForm.value.co_auto2Name + ' ' +  this.tesisForm.value.co_auto2Surname+ ' ' + this.tesisForm.value.co_auto2Patronymic
    }
    if(this.tesisForm.value.co_auto3Name != ''){
      co_autors += ', '+this.tesisForm.value.co_auto3Name + ' ' +  this.tesisForm.value.co_auto3Surname+ ' ' + this.tesisForm.value.co_auto3Patronymic
    }
    let tesis = new Tesis(
      this.tesisForm.value.tesisHead,
      this.tesisForm.value.tesisBody,
      autorFullName,
      co_autors
    )
    tesis.autorEmail =  this.tesisForm.value.autorEmail
    this.dataService.addNewTesis(tesis).subscribe({
      next: () => {},
      error: (err) => alert(err.message)
    })
  }

  clearForm(){
    this.tesisForm.reset(); 
  }

  deleteCo_autors(index: number){
    this.co_autors[index] = false
  }

  ngOnInit(): void {
    this.tesisForm = new FormGroup({
      "autorName": new FormControl('', [Validators.required]),
      "autorSurname": new FormControl('', [Validators.required]),
      "autorPatronymic" : new FormControl(''),
      "autorEmail" : new FormControl('', [Validators.required, Validators.email]),
      "autorWork": new FormControl('', [Validators.required]),

      "co_auto1Name": new FormControl(''),
      "co_auto1Surname": new FormControl(''),
      "co_auto1Patronymic": new FormControl(''),

      "co_auto2Name": new FormControl(''),
      "co_auto2Surname": new FormControl(''),
      "co_auto2Patronymic": new FormControl(''),

      "co_auto3Name": new FormControl(''),
      "co_auto3Surname": new FormControl(''),
      "co_auto3Patronymic": new FormControl(''),

      "tesisHead": new FormControl('', [Validators.required]),
      "tesisBody": new FormControl('', [Validators.required]),

    })
  }
}
