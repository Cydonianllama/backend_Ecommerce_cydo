const Advice = require('../../models/advice')
const response = require('../../network/response')


exports.findAll = async (req, res) => {

    try {
        const advices = await Advice.find({})
        let data = advices.length === 0 ? null : advices
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
        const advice = await Advice.findById(id)
        let data = Advice.length === 0 ? null : advice[0]
        response({
            type: 'success',
            res: res,
            data: advice
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

        let advice = new Advice(data)
        await advice.save();
        response({
            type: 'success',
            res: res,
            data: advice
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
        const result = await Advice.findByIdAndUpdate({ _id: id }, data, { new: true })
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
        await Advice.findByIdAndDelete(id)
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