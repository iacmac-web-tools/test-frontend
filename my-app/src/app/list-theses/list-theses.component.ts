import { Component, OnInit } from '@angular/core';
import {ThesesService} from '../theses.service'
@Component({
  selector: 'app-list-theses',
  templateUrl: './list-theses.component.html',
  styleUrls: ['./list-theses.component.css']
})
export class ListThesesComponent implements OnInit {

  constructor(private theses:ThesesService) { }
  collection: any = [] ;
  ngOnInit(): void {
    
    this.theses.getList().subscribe((result)=>{
console.warn(result)
this.collection=result
    })
  }
  deleteTheses(item:any[]){
    
this.theses.deleteTheses(item).subscribe((result)=>{
  console.warn("result",result)
})
  }

}
