import { ActionReducerMap } from '@ngrx/store'

import * as fromPhones from './phone/store/reducers/phones.reducer'
import * as fromPhone from './phone/store/reducers/phone.reducer'
import { PhonesState } from './phone/store/reducers/phones-state.interface'
import { PhoneState } from './phone/store/reducers/phone-state.interface'


export interface AppState {
    smartphones: PhonesState,
    smartphone: PhoneState
}

export const appReducers: ActionReducerMap<AppState> = {
    smartphones: fromPhones.phonesReducer,
    smartphone: fromPhone.phoneReducer
};

