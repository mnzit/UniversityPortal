import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading!: boolean;
  loadingObserver!: Subject<boolean>;

  constructor() {
    this.loadingObserver = new Subject();
  }

  changeLoader(status: boolean) {
    this.loadingObserver.next(status);
  }

  getLoader(): Observable<boolean> {
    return this.loadingObserver
  }



}
