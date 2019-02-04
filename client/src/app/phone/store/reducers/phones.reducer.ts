import { PhonesState } from './phones-state.interface'
import * as fromPhones from '../actions/phones.actions'


const PAGE_SIZE_DEFAULT = 10

const initialState: PhonesState = {
  phones: [],
  loaded: false,
  loading: false,
  pageNumber: 0,
  pageSize: PAGE_SIZE_DEFAULT,
  error: null
};


export function phonesReducer( state: PhonesState = initialState, action: fromPhones.phonesActions ): PhonesState {

  switch ( action.type ) {
    case fromPhones.LOAD_PHONES:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null
      }

    case fromPhones.LOAD_PHONES_INITIAL:
      return {
        ...state,
        loading: false,
        loaded: true,
        pageNumber: 1,
        pageSize: action.pageSize || PAGE_SIZE_DEFAULT,
        phones: [...action.phones]
      }

    case fromPhones.LOAD_PHONES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        pageNumber: action.pageNumber,
        pageSize: action.pageSize || PAGE_SIZE_DEFAULT,
        phones: [...state.phones, ...action.phones]
      }

    case fromPhones.LOAD_PHONES_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
        phones: []
      }
  
    default:
      return state
      
  }
}
