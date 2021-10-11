const express = require('express')

const router = express.Router()

const invoicesController = require('../controllers/invoicesControllers')

module.exports = function() {
    router.post('/invoices', invoicesController.add)

    router.get('/invoices', invoicesController.list)
    
    return router
}