const Seller = require('../../models/seller')
const response = require('../../network/response')

exports.finBestSellers = (req, res) => {

}

exports.findAllSellers = (req, res) => {

}

exports.findAll = async (req, res) => {

    try {
        const sellers = await Seller.find({})
        let data = seller.length === 0 ? null : sellers
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
        const seller = await Seller.findById(id)
        let data = seller.length === 0 ? null : seller[0]
        response({
            type: 'success',
            res: res,
            data: seller
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

        let seller = new Seller(data)
        await seller.save();
        response({
            type: 'success',
            res: res,
            data: seller
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
        const result = await Seller.findByIdAndUpdate({ _id: id }, seller, { new: true })
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
        await Seller.findByIdAndDelete(id)
        response({
            type: 'success',
            res: res,
            data: `user id : ${id} -> deleted`
        })
    } catch (err) {
        response({
            type: 'error',
            res: res,
            data: err
        })
    }

}