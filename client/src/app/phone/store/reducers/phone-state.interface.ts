import { PhoneInterface as Phone } from "../../phone.interface"
import {HttpErrorResponse} from "@angular/common/http"

export interface PhoneState {
  phone: Phone,
  loaded: boolean,
  loading: boolean,
  error: HttpErrorResponse
}
