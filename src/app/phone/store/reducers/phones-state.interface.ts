import { PhoneInterface as Phone } from "../../phone.interface"
import {HttpErrorResponse} from "@angular/common/http"

export interface PhonesState {
  phones: Array<Phone>,
  loaded: boolean,
  loading: boolean,
  pageNumber: number,
  pageSize: number,
  error: HttpErrorResponse
}
