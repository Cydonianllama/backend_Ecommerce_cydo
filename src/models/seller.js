const mongo = require('../utils/db')

const sellerSchema = mongo.Schema(
    {
        idSeller: String,
        idUser: String,
        titelSellerCard: String,
        description: String,
        category: String,
        urlAvatar: String,
        urlSellerProfile: String 
    },
    {
        timestamps: true
    }
)

const seller = mongo.model('sellers',sellerSchema)

module.exports = seller;