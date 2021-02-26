const User = require('../../models/user')
const response = require('../../network/response')

exports.findAll = async (req,res) => {

    try {
        const users = await User.find({})
        let data = users.length === 0 ? null : users
        response({
            type: 'success',
            res: res,
            data: data
        })
    }catch(err){
        response({
            type: 'error',
            res: res,
            data: err
        })
    }

}

exports.finOne = async (req,res) =>{

    let {id} = req.params

    if (!id) response({
        type : 'error', 
        res : res,
        data : 'no id sended'
    })

    try{
        const user = await User.findById(id)
        let data = user.length === 0 ? null : user[0]
        response({
            type: 'success',
            res: res,
            data: user
        })

    }catch(err){
        response({
            type: 'error',
            res: res,
            data: err
        })
    }
    
}

exports.create = async(req,res) => {
    
    if (!req.body) {
        response({
            type: 'error',
            res: res,
            data: 'no body'
        })
    }
    
    const data = req.body

    try {

        let user = new User(data)
        await user.save();
        response({
            type: 'success',
            res: res,
            data: user
        })

    }catch(err){
        response({
            type: 'error',
            res: res,
            data: err
        })
    }
    
}

exports.update = async (req,res) =>{
    
    if(!req.params.id){
        response({
            type: 'error',
            res: res,
            data: 'no id sended'
        })
    }

    if (!req.body){
        response({
            type: 'error',
            res: res,
            data: 'no body sended'
        })
    }

    let { ...data } = req.body
    const {id} = req.params

    try{
        const result = await User.findByIdAndUpdate({_id : id},data,{new : true})
        response({
            type: 'success',
            res: res,
            data: result
        })
    }catch(err){
        
        response({
            type: 'error',
            res: res,
            data: err
        })
    }
    

}

exports.delete = async (req,res) =>{
    if (!req.params.id) {
        response({
            type: 'error',
            res: res,
            data: 'no id sended'
        })
    }

    const {id} = req.params

    try{
        await User.findByIdAndDelete(id)
        response({
            type: 'success',
            res: res,
            data: `user id : ${id} -> deleted`
        })
    }catch(err){
        response({
            type: 'error',
            res: res,
            data: err
        })
    }

}