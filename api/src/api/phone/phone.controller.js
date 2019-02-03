import {PhoneMockController} from '../../db/db'

const PhoneController = {

    getPhones: (req, res) => {
        console.log('getPhones -- req.params', req.params)
        res.status(200).send({
            success: 'true',
            message: 'phones retrieved successfully',
            data: PhoneMockController.getMockPhoneList()
        })
    },

    getPhonesPagination: (req, res) => {
        console.log('getPhonesPagination -- req.params', req.query)
        let result = PhoneMockController.getMockPhoneListPagination(req.query)
        if(result.length > 0){
            res.status(200).send({success: 'true', message: 'phone details successfully', data: result})
        } else {
            res.status(404).send({success: 'false', message: 'phones not found'})
        }
    },


    getPhoneDetails: (req, res) => {
        console.log('getPhoneDetails -- req.params', req.params)
        let result = PhoneMockController.getMockPhoneDetails(Number.parseInt(req.params.phoneId))
        if(result){
            res.status(200).send({success: 'true', message: 'phone details successfully', data: result})
        } else {
            res.status(404).send({success: 'false', message: 'phone details not found'})
        }
    }
}


export { PhoneController }