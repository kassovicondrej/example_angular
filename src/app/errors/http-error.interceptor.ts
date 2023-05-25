import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, finalize, Observable, retry, throwError } from 'rxjs'
import { LoadingDialogService } from '../services'

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private loadingDialogService: LoadingDialogService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingDialogService.openDialog()
    return next.handle(request).pipe(
      retry({ delay: 500, count: 3 }),
      catchError(this.handleError),
      finalize(() => {
        this.loadingDialogService.hideDialog()
      }),
    )
  }

  private handleError(errorResponse: HttpErrorResponse) {
    console.error('Error from Http Error Interceptor', errorResponse)
    // Will be handled by GlobalErrorHandler
    return throwError(() => errorResponse.message)
  }
}
