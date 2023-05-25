import { ErrorHandler, Injectable } from '@angular/core'
import { ErrorDialogService } from '../services/error-dialog.service'
import { ErrorService } from '../services'

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private errorDialogService: ErrorDialogService, private errorService: ErrorService) {}

  handleError(error: Error) {
    // Handle Client Error (Angular Error, ReferenceError...)
    console.error('Error from global error handler', error)
    this.errorDialogService.openDialog(error?.message || 'Undefined error')
    this.errorService.log(error)
  }
}
