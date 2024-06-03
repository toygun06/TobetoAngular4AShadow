import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new Subject<boolean>();
  loading$ = this.loadingSubject.asObservable();
  private loadingTimeout: any;

  showLoading(minimumDuration: number = 3000) {
    this.loadingTimeout = setTimeout(() => {
      this.loadingSubject.next(true);
    }, minimumDuration);
  }

  hideLoading() {
    clearTimeout(this.loadingTimeout);
    this.loadingSubject.next(false);
  }
}
