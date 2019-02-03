import { PhoneInterface as Phone } from "../../phone.interface"
import { Response } from '@angular/http'

export interface PhoneState {
  phone: Phone,
  loaded: boolean,
  loading: boolean,
  error: Response
}
