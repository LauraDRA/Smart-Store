import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'

import * as phoneActions from '../actions/phone.actions'
import { of, Observable } from 'rxjs'
import { map, switchMap, catchError } from 'rxjs/operators'
import { PhoneService } from '../../phone.service'

@Injectable()
export class PhoneEffects {

    constructor(
        private actions$: Actions,
        private phoneService: PhoneService
    ) {}

    @Effect()
    loadPhone$: Observable<Action> = this.actions$.pipe(
      ofType( phoneActions.LOAD_PHONE ),
      switchMap((action: phoneActions.LoadPhoneAction) =>{
        return this.phoneService.getPhoneById(action.id)
              .pipe(
                  map( phone => {
                      return new phoneActions.LoadPhoneActionSuccess(phone) 
                  }),
                  catchError( error => of(new phoneActions.LoadPhoneFail(error)) )
              )
      })
    )
}
