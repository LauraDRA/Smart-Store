import {PhoneMockController} from '../../db/db'

const PhoneController = {
    getPhones: (req, res) => {
        console.log('getPhones -- req.params', req.params);
        res.status(200).send({
            success: 'true',
            message: 'phones retrieved successfully',
            data: PhoneMockController.getMockPhoneList()
          })
    },


    getPhonesPagination: (req, res) => {
        console.log('getPhonesPagination -- req.params', req.query);
        res.status(200).send({
            success: 'true',
            message: 'phones retrieved successfully',
            data: PhoneMockController.getMockPhoneListPagination(req.query)
        })
    },


    getPhoneDetails: (req, res) => {
        console.log('getPhoneDetails -- req.params', req.params);
        res.status(200).send({
            success: 'true',
            message: 'phone details successfully',
            data: PhoneMockController.getMockPhoneDetails(Number.parseInt(req.params.phoneId))
        })
    }
}

export { PhoneController }