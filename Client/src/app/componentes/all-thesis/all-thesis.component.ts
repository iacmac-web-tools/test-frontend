import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tesis } from 'src/Tesis';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-all-thesis',
  templateUrl: './all-thesis.component.html',
  styleUrls: ['./all-thesis.component.css']
})
export class AllThesisComponent implements OnInit {
  allThesises: Tesis[] = []
  allThesises2: Tesis[] = []

  constructor(
    private dataService: DataService,
    private router: Router,
    private viewportScroller: ViewportScroller

  ){}

  toTop(){
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  deleteTesis(tesis : Tesis){
    if(confirm('Вы точно хотите удалить тезис "' + tesis.head + '" ?'))
    this.allThesises.splice(this.allThesises.indexOf(tesis),1)
    this.dataService.deleteTesis(tesis).subscribe({
      next: (data: any) => {
        for(let i = 0; i < data.value.length; i++){
          data.value.tesesis[i].id = data.value.ids[i]
      }
      this.allThesises = data.value.tesesis.slice(0, data.value.length/2)
      this.allThesises2 = data.value.tesesis.slice(data.value.length/2)
      
     
      },
      error: (err) => alert(err.message)
    })
  }
  deleteTesis2(tesis : Tesis){
    if(confirm('Вы точно хотите удалить тезис "' + tesis.head + '" ?'))
    this.allThesises2.splice(this.allThesises2.indexOf(tesis),1)
    this.dataService.deleteTesis(tesis).subscribe({
      next: (data : any) => {
        for(let i = 0; i < data.value.length; i++){
          data.value.tesesis[i].id = data.value.ids[i]
      }
      this.allThesises = data.value.tesesis.slice(0, data.value.length/2)
      this.allThesises2 = data.value.tesesis.slice(data.value.length/2)
      
     
      },
      error: (err) => alert(err.message)
    })
  }

  toTesis(tesis: Tesis){
    localStorage.setItem('id',String(tesis.id))
    this.router.navigate(['/id/'+  tesis.id])
  }
  

  ngOnInit(): void {
    this.dataService.getAllTesises().subscribe({
      next: (data : any) => {
    
          for(let i = 0; i < data.value.length; i++){
            data.value.tesesis[i].id = data.value.ids[i]
        }
        this.allThesises = data.value.tesesis.slice(0, data.value.length/2)
        this.allThesises2 = data.value.tesesis.slice(data.value.length/2)
        
       
      },
      error: (err) => alert(err.message)
    })
  }
}
