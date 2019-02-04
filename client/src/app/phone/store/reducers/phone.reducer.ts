import { PhoneState } from './phone-state.interface'
import * as fromPhone from '../actions/phone.actions'


export function phoneReducer( state: PhoneState, action: fromPhone.phoneActions ): PhoneState {

  switch ( action.type ) {
    case fromPhone.LOAD_PHONE:
      return {
        ...state,
        loading: true,
        error: null
      }

    case fromPhone.LOAD_PHONE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        phone: action.phone
      }

    case fromPhone.LOAD_PHONE_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
        phone: null
      }
  
    default:
      return state
      
  }
}
