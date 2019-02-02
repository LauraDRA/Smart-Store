import { PhoneInterface as Phone } from "../phone.interface"

export interface PhoneState {
  phones: Array<Phone>,
  loaded: boolean,
  loading: boolean,
  error: any
}