import { ActionReducerMap } from '@ngrx/store';

import * as fromPhone from './phone/store/phone.reducer';
import { PhoneState } from './phone/store/phone-state.interface'


export interface AppState {
    smartphone: PhoneState
}

export const appReducers: ActionReducerMap<AppState> = {
    smartphone: fromPhone.phoneReducer
};

