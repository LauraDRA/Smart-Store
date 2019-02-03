import { PhoneInterface as Phone } from "../../phone.interface"
import { Response } from '@angular/http';

export interface PhonesState {
  phones: Array<Phone>,
  loaded: boolean,
  loading: boolean,
  error: Response
}
