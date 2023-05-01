import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tesis } from 'src/Tesis';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-selected-thesis',
  templateUrl: './selected-thesis.component.html',
  styleUrls: ['./selected-thesis.component.css']
})
export class SelectedThesisComponent implements OnInit{
  constructor(
    private dataService: DataService,
    private router: Router
    ){}

    selectedTesis: Tesis = new Tesis('','','')

    deleteSelected(){
      if(confirm('Вы действительно хотите удалить "' + this.selectedTesis.head + '"?') )
     this.dataService.deleteTesis(this.selectedTesis).subscribe({
      next(value) {
      },
      error: (err) => alert(err.message)
     })
     this.router.navigate(['All'])
    }

    updateTesis(){
      this.dataService.updateTesis(this.selectedTesis).subscribe({
        next: () => {},
        error: (err) => alert(err.message)
      })
    }

    ngOnInit(): void {
      this.dataService.getTesis(localStorage.getItem('id')).subscribe({
        next: (data : any) => {
          this.selectedTesis = data.value;
          this.selectedTesis.id =this.dataService.getId('id')
        },
        error: (err) => alert(err.message)
      })
    }
}
