const Invoices = require('../models/Invoices')

// Agregar factura

exports.add = async (req, res ) => {
    const invoice = new Invoices(req.body)
    try {
        await invoice.save()
        res.json({message: 'Nueva factura agregada con éxito'})
    } catch (error) {
        console.log(error)
        res.send(error)
        next()
    }
}

exports.list = async (req, res) => {
    try {
        const invoices = await Invoices.find({})
        res.json(invoices)
    } catch (error) {
        console.log(error)
        res.send(error)
        next()
    }
}