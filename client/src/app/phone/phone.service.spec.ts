import {getTestBed, TestBed} from '@angular/core/testing';
import { PhoneService } from './phone.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import {PhoneInterface as Phone} from "./phone.interface"

describe('PhoneService', () => {
  let service: PhoneService
  let injector: TestBed
  let httpMock: HttpTestingController
  let mockPhones: Array<Phone> = [{
    id: 1,
    title: 'string',
    description: 'string',
    color: 'string',
    image: 'string',
    price: 10,
    characteristics: 'string'
  }, {
    id: 2,
    title: 'string',
    description: 'string',
    color: 'string',
    image: 'string',
    price: 120,
    characteristics: 'string'
  }]
  let mockPhone: Phone = {
    id: 1,
    title: 'string',
    description: 'string',
    color: 'string',
    image: 'string',
    price: 10,
    characteristics: 'string'
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PhoneService
      ]
    })

    injector = getTestBed()
    httpMock = injector.get(HttpTestingController)
    service = TestBed.get(PhoneService)
  })


  afterEach( () => {
    httpMock.verify()
  })


  it('can load instance', () => {
    expect(service).toBeTruthy();
  })

  it('should call to getPhones method and it returns phone list', (done) => {

    service.getPhones(1,2).subscribe((phones)=>{
      expect(phones.length).toBe(2)
      expect(phones).toEqual(mockPhones)
      done()
    })

    const url = 'http://localhost:8000/api/v1/phones/search?pageNumber=1&pageSize=2'
    const req = httpMock.expectOne(url)
    expect(req.request.method).toBe('GET')
    req.flush({data: mockPhones})
  })


  it('should call to getPhoneById method and it returns phone details', (done) => {

    service.getPhoneById(1).subscribe((phone)=>{
      expect(phone).toEqual(mockPhone)
      done()
    })

    const url = 'http://localhost:8000/api/v1/phones/detail/1'
    const req = httpMock.expectOne(url)
    expect(req.request.method).toBe('GET')
    req.flush({data: mockPhone})
  })
})
