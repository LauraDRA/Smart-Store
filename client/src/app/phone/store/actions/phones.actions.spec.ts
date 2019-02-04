import {PhoneInterface as Phone} from "../../phone.interface"
import * as fromPhones from '../actions/phones.actions'

describe('PhonesActions:', () => {

  const mockPhones: Array<Phone> = [{
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
    price: 20,
    characteristics: 'string'
  }]

  it('LoadPhonesAction should create an action (with args) and update pageNumber and pageSize', () => {
    const action = new fromPhones.LoadPhonesAction(2, 20);

    expect(action.type).toEqual(fromPhones.LOAD_PHONES);
    expect(action.pageNumber).toEqual(2);
    expect(action.pageSize).toEqual(20);
  })

  it('LoadPhonesAction should create an action (without args) and initialize pageNumber and pageSize', () => {
    const action = new fromPhones.LoadPhonesAction();

    expect(action.type).toEqual(fromPhones.LOAD_PHONES);
    expect(action.pageNumber).toEqual(1);
    expect(action.pageSize).toEqual(10);
  })

  it('LoadPhonesActionInitial should create an action', () => {
    const action = new fromPhones.LoadPhonesActionInitial(mockPhones, 3);

    expect(action.type).toEqual(fromPhones.LOAD_PHONES_INITIAL);
    expect(action.phones).toEqual(mockPhones);
    expect(action.pageSize).toEqual(3);
  })

  it('LoadPhonesActionSuccess should create an action and load phones, pageNumber and pageSize', () => {
    const action = new fromPhones.LoadPhonesActionSuccess(mockPhones, 3,30)

    expect(action.type).toEqual(fromPhones.LOAD_PHONES_SUCCESS)
    expect(action.phones).toEqual(mockPhones)
    expect(action.pageNumber).toEqual(3)
    expect(action.pageSize).toEqual(30)
  })

  it('LoadPhonesFailAction should create an action and load error', () => {
    const mockError = {code:404, success: 'false', message: 'phone not found'}
    const action = new fromPhones.LoadPhonesFailAction(mockError)

    expect(action.type).toEqual(fromPhones.LOAD_PHONES_ERROR)
    expect(action.payload).toEqual(mockError)
  })
});
