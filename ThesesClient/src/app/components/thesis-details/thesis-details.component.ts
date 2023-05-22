import {Component, OnInit} from '@angular/core';
import {ITheses, IThesesDetails} from "../../models/theses";
import {Subscription} from "rxjs";
import {ThesesService} from "../../services/theses.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";

@Component({
  selector: 'app-thesis-details',
  templateUrl: './thesis-details.component.html',
  styleUrls: ['./thesis-details.component.scss']
})
export class ThesisDetailsComponent implements OnInit {
  thesis: IThesesDetails;
  thesisSubscription: Subscription;
  constructor(private ThesesService: ThesesService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.thesisSubscription = this.route.data.subscribe((data) => {
      this.thesis = data['data'];
    })
  }
}
