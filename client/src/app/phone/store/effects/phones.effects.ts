import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'

import * as phonesActions from '../actions/phones.actions'
import { of, Observable } from 'rxjs'
import { map, switchMap, catchError } from 'rxjs/operators'
import { PhoneService } from '../../phone.service'

@Injectable()
export class PhonesEffects {

    constructor(
        private actions$: Actions,
        private phoneService: PhoneService
    ) {}

    @Effect()
    loadPhones$: Observable<Action> = this.actions$.pipe(
      ofType( phonesActions.LOAD_PHONES ),
      switchMap((action: phonesActions.LoadPhonesAction) =>{
        return this.phoneService.getPhones(action.pageNumber, action.pageSize)
              .pipe(
                  map( phones => {
                    let nextPhoneActions = (action.pageNumber === 1)
                                        ? new phonesActions.LoadPhonesActionInitial(phones)
                                        : new phonesActions.LoadPhonesActionSuccess(phones, action.pageNumber)
                    return nextPhoneActions
                  } ),
                  catchError( error => of(new phonesActions.LoadPhonesFailAction(error)) )
              )
      })
    )
}
