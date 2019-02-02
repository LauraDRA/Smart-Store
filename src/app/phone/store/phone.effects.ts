import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'

import * as phoneActions from './phone.actions'
import { of, Observable } from 'rxjs'
import { map, switchMap, catchError } from 'rxjs/operators'
import { PhoneService } from '../phone.service'

@Injectable()
export class PhoneEffects {

    constructor(
        private actions$: Actions,
        private phoneService: PhoneService
    ) {}

    @Effect()
    loadPhones$: Observable<Action> = this.actions$.pipe(
      ofType( phoneActions.LOAD_PHONES ),
      switchMap(action =>{
        return this.phoneService.getPhones()
              .pipe(
                  map( phones => new phoneActions.LoadPhonesActionSuccess(phones) ),
                  catchError( error => of(new phoneActions.LoadPhonesFail(error)) )
              )
      })
    )
}
