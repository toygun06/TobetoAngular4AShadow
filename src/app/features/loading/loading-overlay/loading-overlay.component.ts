import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-loading-overlay',
  standalone: true,
  template: `
    <div *ngIf="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <div class="loading-text">Loading...</div>
    </div>
  `,
  styleUrls: ['./loading-overlay.component.css']
})
export class LoadingOverlayComponent implements OnDestroy {
  isLoading = false;
  private loadingSubscription: Subscription;

  constructor(private loadingService: LoadingService) {
    this.loadingSubscription = this.loadingService.loading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
