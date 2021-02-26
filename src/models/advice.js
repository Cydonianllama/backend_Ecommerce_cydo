const mongo = require('../utils/db')

const adviceSchema = mongo.Schema(
    {
        adiveId: String ,
        titleAdvice: String ,
        idSeller: String ,
        nameSeller: String ,
        text: String ,
        urlImage: String,
        date : Date
    },
    {
        timestamps: true
    }
)

const advice = mongo.model('advices',adviceSchema)

module.exports = advice;