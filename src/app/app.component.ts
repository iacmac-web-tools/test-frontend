import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
    selector: 'myapp2',


    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})



export class AppComponent{


    constructor(private router: Router) {}
        goHome() {
            this.router.navigate(['/First'])
        }
        addNew() {
            this.router.navigate(['/Second'])
        }

}

