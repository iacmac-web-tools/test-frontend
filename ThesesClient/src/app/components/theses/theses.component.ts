import {Component, OnInit} from '@angular/core';
import {ITheses, IThesesDetails} from "../../models/theses";
import {Subscription} from "rxjs";
import {ThesesService} from "../../services/theses.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";

@Component({
  selector: 'app-theses',
  templateUrl: './theses.component.html',
  styleUrls: ['./theses.component.scss']
})
export class ThesesComponent implements OnInit{
  theses: IThesesDetails[];
  thesesSubscription: Subscription;

  constructor(private ThesesService: ThesesService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.thesesSubscription = this.ThesesService.getTheses().subscribe((data)=>{
        this.theses = data;
      })
  }
  openDialog(thesis?: IThesesDetails): void {
    const dialogRef = this.dialog.open(DialogBoxComponent,{
      width: '500px',
      data: thesis
    });

    dialogRef.afterClosed().subscribe((data) => {
      if(data){
        if(data && data.id)
          this.updateData(data);
        else
          this.postData(data)
      }
    })
  }

  updateData(thesis: IThesesDetails){
    this.ThesesService.updateThesis(thesis).subscribe((data) => {
      this.theses = this.theses.map((thesis) =>{
        if(thesis.id === data.id) return data
        else return thesis
      })
    });
  }
  postData(data: IThesesDetails){
    this.ThesesService.postThesis(data).subscribe((data) => this.theses.push(data));
  }

  deleteThesis(id: number){
    this.ThesesService.deleteThesis(id).subscribe(() => this.theses.find((item) =>{
      if(id===item.id){
        let idx = this.theses.findIndex((data) => data.id === id)
        this.theses.splice(idx,1)
      }
    }))
  }

  ngOnDestroy() {
    if(this.thesesSubscription) this.thesesSubscription.unsubscribe();
  }

}
