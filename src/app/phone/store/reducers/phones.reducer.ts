import { PhonesState } from './phones-state.interface'
import * as fromPhones from '../actions/phones.actions'


const initialState: PhonesState = {
  phones: [],
  loaded: false,
  loading: false,
  error: null
};


export function phonesReducer( state: PhonesState = initialState, action: fromPhones.phonesActions ): PhonesState {

  switch ( action.type ) {
    case fromPhones.LOAD_PHONES:
      return {
        ...state,
        loading: true,
        error: null
      }

    case fromPhones.LOAD_PHONES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        phones: [...state.phones, ...action.phones]
      }

    case fromPhones.LOAD_PHONES_ERROR:
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
