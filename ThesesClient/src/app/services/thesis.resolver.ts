import { ThesesService } from './theses.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import {ITheses, IThesesDetails} from "../models/theses";

@Injectable({
  providedIn: 'root'
})
export class ThesisResolver implements Resolve<IThesesDetails> {
  constructor(private ThesesService: ThesesService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IThesesDetails> {
    return this.ThesesService.getThesis(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['theses']);
        return EMPTY;
      })
    );
  }
}
