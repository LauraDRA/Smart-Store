import { Action } from '@ngrx/store'
import { PhoneInterface as Phone } from '../phone.interface'


export const LOAD_PHONES = '[Phones] Load'
export const LOAD_PHONES_SUCCESS = '[Phones] Load OK'
export const LOAD_PHONES_ERROR = '[Phones] Load ERROR'


export class LoadPhonesAction implements Action {
  readonly type = LOAD_PHONES
}

export class LoadPhonesActionSuccess implements Action {
  readonly type = LOAD_PHONES_SUCCESS

  constructor( public phones: Array<Phone>) {}
}

export class LoadPhonesFail implements Action {
  readonly type = LOAD_PHONES_ERROR

  constructor( public payload) {}
}


export type phoneActions = LoadPhonesAction |
                           LoadPhonesActionSuccess |
                           LoadPhonesFail
                           