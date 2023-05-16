import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { LoadingDialogService } from '../services'

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private loadingDialogService: LoadingDialogService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this.loadingDialogService.openDialog();
    return next.handle(request)
  }

  private handleError(errorResponse: HttpErrorResponse) {
    console.error('Error from Http Error Interceptor', errorResponse)
    // Will be handled by GlobalErrorHandler
    return throwError(() => errorResponse.message)
  }
}
