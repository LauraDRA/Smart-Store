import express from 'express'
import { PhoneController } from './phone.controller.js'

const router = express.Router()


//GET
router.get('/', PhoneController.getPhones)
router.get('/search?:requestParams', PhoneController.getPhonesPagination)
router.get('/detail/:phoneId', PhoneController.getPhoneDetails)

export { router }