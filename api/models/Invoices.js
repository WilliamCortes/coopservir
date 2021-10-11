const mongoose = require('mongoose')

const Schema = mongoose.Schema

const invoiceSchema = new Schema({
subTotal:{
    type: String,
},
iva:{
    type: String,
},
total:{
    type: String
}
})

module.exports = mongoose.model('Invoices', invoiceSchema)