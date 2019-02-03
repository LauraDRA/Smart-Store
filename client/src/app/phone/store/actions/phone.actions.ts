import { Action } from '@ngrx/store'
import { PhoneInterface as Phone } from '../../phone.interface'


export const LOAD_PHONE = '[Phone] Load'
export const LOAD_PHONE_SUCCESS = '[Phone] Load OK'
export const LOAD_PHONE_ERROR = '[Phone] Load ERROR'


export class LoadPhoneAction implements Action {
  readonly type = LOAD_PHONE

  constructor( public id: number) {}
}

export class LoadPhoneActionSuccess implements Action {
  readonly type = LOAD_PHONE_SUCCESS

  constructor( public phone: Phone) {}
}

export class LoadPhoneFail implements Action {
  readonly type = LOAD_PHONE_ERROR

  constructor( public payload) {}
}


export type phoneActions = LoadPhoneAction |
                           LoadPhoneActionSuccess |
                           LoadPhoneFail
                           