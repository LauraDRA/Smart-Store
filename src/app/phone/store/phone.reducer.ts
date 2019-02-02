import { PhoneState } from './phone-state.interface'
import * as fromPhone from './phone.actions'


export function phoneReducer( state: PhoneState, action: fromPhone.phoneActions ): PhoneState {

  switch ( action.type ) {
    case fromPhone.LOAD_PHONES:
      return {
        ...state,
        loading: true,
        error: null
      }

    case fromPhone.LOAD_PHONES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        phones: [...action.phones]
      }

    case fromPhone.LOAD_PHONES_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      }
  
    default:
      return state
      
  }
}
