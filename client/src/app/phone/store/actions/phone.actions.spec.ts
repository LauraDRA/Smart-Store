import {PhoneInterface as Phone} from "../../phone.interface"
import * as fromPhone from '../actions/phone.actions'

describe('PhoneActions:', () => {

  it('LoadPhoneAction should create an action', () => {
    const action = new fromPhone.LoadPhoneAction(1);

    expect(action.type).toEqual(fromPhone.LOAD_PHONE);
    expect(action.id).toEqual(1);
  })

  it('LoadPhoneActionSuccess should create an action', () => {
    const mockPhone: Phone = {
          id: 1,
          title: 'string',
          description: 'string',
          color: 'string',
          image: 'string',
          price: 10,
          characteristics: 'string'
        }
    const action = new fromPhone.LoadPhoneActionSuccess(mockPhone);

    expect(action.type).toEqual(fromPhone.LOAD_PHONE_SUCCESS);
    expect(action.phone).toEqual(mockPhone);
  })

  it('LoadPhoneFail should create an action', () => {
    const mockError = {code:404, success: 'false', message: 'phone not found'}
    const action = new fromPhone.LoadPhoneFail(mockError)

    expect(action.type).toEqual(fromPhone.LOAD_PHONE_ERROR)
    expect(action.payload).toEqual(mockError)
  })
});
