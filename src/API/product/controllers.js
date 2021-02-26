const Product = require('../../models/product')
const response = require('../../network/response')


exports.findAll = async (req, res) => {

    try {
        const products = await Product.find({})
        let data = products.length === 0 ? null : products
        response({
            type: 'success',
            res: res,
            data: data
        })
    } catch (err) {
        response({
            type: 'error',
            res: res,
            data: err
        })
    }

}

exports.finOne = async (req, res) => {

    let { id } = req.params

    if (!id) response({
        type: 'error',
        res: res,
        data: 'no id sended'
    })

    try {
        const product = await Product.findById(id)
        let data = Product.length === 0 ? null : product[0]
        response({
            type: 'success',
            res: res,
            data: product
        })

    } catch (err) {
        response({
            type: 'error',
            res: res,
            data: err
        })
    }

}

exports.create = async (req, res) => {

    if (!req.body) {
        response({
            type: 'error',
            res: res,
            data: 'no body'
        })
    }

    const data = req.body

    try {

        let product = new Product(data)
        await product.save();
        response({
            type: 'success',
            res: res,
            data: product
        })

    } catch (err) {
        response({
            type: 'error',
            res: res,
            data: err
        })
    }

}

exports.update = async (req, res) => {

    if (!req.params.id) {
        response({
            type: 'error',
            res: res,
            data: 'no id sended'
        })
    }

    if (!req.body) {
        response({
            type: 'error',
            res: res,
            data: 'no body sended'
        })
    }

    let { ...data } = req.body
    const { id } = req.params

    try {
        const result = await Product.findByIdAndUpdate({ _id: id }, data, { new: true })
        response({
            type: 'success',
            res: res,
            data: result
        })
    } catch (err) {

        response({
            type: 'error',
            res: res,
            data: err
        })
    }


}

exports.delete = async (req, res) => {
    if (!req.params.id) {
        response({
            type: 'error',
            res: res,
            data: 'no id sended'
        })
    }

    const { id } = req.params

    try {
        await Product.findByIdAndDelete(id)
        response({
            type: 'success',
            res: res,
            data: `Product id : ${id} -> deleted`
        })
    } catch (err) {
        response({
            type: 'error',
            res: res,
            data: err
        })
    }

}