import { ErrorHandler, Injectable } from '@angular/core'
import { ErrorDialogService } from '../services/error-dialog.service'

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private errorDialogService: ErrorDialogService) {}

  handleError(error: Error) {
    // Handle Client Error (Angular Error, ReferenceError...)
    console.error('Error from global error handler', error)
  }
}
