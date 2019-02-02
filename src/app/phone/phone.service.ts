import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'
import { PhoneInterface as Phone } from './phone.interface'
import { HttpClient } from '@angular/common/http'
import { map, delay } from 'rxjs/operators';
import { environment } from '../../environments/environment'



@Injectable()
export class PhoneService {
  private phones: Array<Phone>

  constructor( private http: HttpClient ) {}

  getPhones(): Observable<Phone[]>  {
    return this.http.get(`${ environment.serverUrl }/phones/`)
      .pipe(
        delay(1500),
        map( resp => resp['data'])
      )

  }
}