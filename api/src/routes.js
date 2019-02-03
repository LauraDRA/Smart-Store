/**
 * Main application routes
 */


import express from 'express'
import { router as phonesRoute } from './api/phone/index'

const router = express.Router()


export function routing(app) {

    // Insert routes below
    router.use('/phones', phonesRoute)

    // Set a prefix for all calls
    app.use('/api/v1', router)

}
