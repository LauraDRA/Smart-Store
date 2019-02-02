import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'
import { PhoneInterface } from './phone.interface'


@Injectable()
export class PhoneService {
  private phones: Array<PhoneInterface>

  constructor() { 

    this.phones = [
      {
        id: 1,
        title: "iPhone XR",
        description: "It’s a brilliant upgrade. In every way",
        color: "Black",
        image: "https://www.tuimeilibre.com/1503-large_default/apple-iphone-xr-128gb-negro.jpg",
        price: 799,
        characteristics: "Liquid Retina. Longest battery life ever. Fastest performance. Water and splash resistant. Studio-quality photos and 4K video. More secure with Face ID."
      },
      {
        id: 2,
        title: "Samsung Galaxy A7",
        description: "6\" Smartphone",
        color: "Pink",
        image: "https://http2.mlstatic.com/samsung-galaxy-a7-2018-entrega-inmediata-triple-camara-D_NQ_NP_719365-MLA28747717132_112018-F.jpg",
        price: 241.99,
        characteristics: "Liquid Retina, 4G 64Gb, Dual-Sim"
      }
    ]
  }

  getPhones(): Observable<PhoneInterface[]> {
    return of(this.phones)
  }
}
