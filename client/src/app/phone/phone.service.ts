import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'
import { PhoneInterface as Phone } from './phone.interface'
import { HttpClient, HttpParams } from '@angular/common/http'
import { map, delay } from 'rxjs/operators';
import { environment } from '../../environments/environment'



@Injectable()
export class PhoneService {

  constructor( private http: HttpClient ) {}

  getPhones(pageNumber: number = 1, pageSize: number = 10): Observable<Phone[]>  {

    let params = new HttpParams()
      .set("pageNumber", pageNumber.toString())
      .set("pageSize", pageSize.toString())

    return this.http.get(`${ environment.serverUrl }/phones/search`, { params: params })
      .pipe(
        delay(2000),
        map( resp => resp['data'])
      )

  }

  getPhoneById(id: number = 1 ): Observable<Phone>  {
    return this.http.get(`${ environment.serverUrl }/phones/detail/${ id }`)
      .pipe(
        delay(2000),
        map( resp => resp['data'])
      )

  }
}
