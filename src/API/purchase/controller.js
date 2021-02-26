const Purchase= require('../../models/purchase')
const response = require('../../network/response')


exports.findAll = async (req, res) => {

    try {
        const purchase = await Purchase.find({})
        let data = purchase.length === 0 ? null : purchase
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
        const purchase = await Purchase.findById(id)
        let data = purchase.length === 0 ? null : purchase[0]
        response({
            type: 'success',
            res: res,
            data: purchase
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

        let purchase = new Purchase(data)
        await purchase.save();
        response({
            type: 'success',
            res: res,
            data: purchase
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
        const result = await Purchase.findByIdAndUpdate({ _id: id }, data, { new: true })
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
        await Purchase.findByIdAndDelete(id)
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