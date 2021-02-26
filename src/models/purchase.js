const mongo = require('../utils/db')

const purchaseSchema = mongo.Schema(
    {
        idPurchase: String ,
        idProduct: String ,
        nameProduct: String ,
        size: String ,
        quanity: String , 
        idSeller: String ,
        nameSeller: String ,
        freeShipping: String , 
        date: Date 
    },
    {
        timestamps: true
    }
)

const purchase = mongo.model('purcharses',purchaseSchema)

module.exports  = purchase