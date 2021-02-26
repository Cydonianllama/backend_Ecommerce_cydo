const mongo = require('../utils/db')

const productSchema = mongo.Schema({
    idProduct: String,
    nameProduct: String,
    sizeProduct: String,
    isFreeToShipping: Boolean,
    category: String,
    description: String,
    unitaryPrice: Number,
    percentageOffert: Number,
    nameSeller: String,
    idSeller:String,
    urlImageProduct: String
},
    {
        timestamps: true
    }
)

const product = mongo.model("products",productSchema)

module.exports = product;