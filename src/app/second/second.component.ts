import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
  
})
export class SecondComponent {

  @ViewChild('myForm') formMy!: NgForm;

  submitForm(){

  }

  
  item: Item[] = [];

  Famaly: string = "";
  Name: string = "";
  Name2: string = "";
  Email: string = "";
  MesRab: string = "";
  Tema: string = "";
  Soderj: string = "";


  addItem(Famaly: string, Name: string, Name2: string, Email: string, MesRab: string, Tema: string, Soderj: string): void {
      this.item.push(new Item(Famaly, Name, Name2, Email, MesRab, Tema, Soderj));
      this.formMy.reset()
  }

  addDop(){
    ;
  }
}

export class Item{

  constructor(public Famaly: string, 
              public Name: string, 
              public Name2: string, 
              public Email: string,
              public MesRab: string, 
              public Tema: string, 
              public Soderj: string)
  {
      this.Famaly = Famaly;
      this.Name = Name;
      this.Name2 = Name2;
      this.Email= Email;
      this.MesRab= MesRab;
      this.Tema = Tema;
      this.Soderj = Soderj;
  }
}


