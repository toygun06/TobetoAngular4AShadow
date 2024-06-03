import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.showLoading(); // Loading başlat

    return next.handle(request).pipe(
      finalize(() => {
        // HTTP isteği tamamlandıktan sonra minimum süreyi beklemeden loading durumunu kapat
        this.loadingService.hideLoading();
      })
    );
  }
}
