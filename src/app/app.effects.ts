import { PhonesEffects } from "./phone/store/effects/phones.effects"
import { PhoneEffects } from "./phone/store/effects/phone.effects"

export const appEffects = [PhonesEffects, PhoneEffects]

export * from './phone/store/effects/phones.effects'
export * from './phone/store/effects/phone.effects'