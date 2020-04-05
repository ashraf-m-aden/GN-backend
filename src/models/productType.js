const mongoose = require('mongoose')
const productTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    idSubCategory: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    pic: {
        type: String
    },
    enabled: {
        type: Boolean,
        required: true
    }

})




const productType = mongoose.model('ProductType', productTypeSchema)

module.exports = productType