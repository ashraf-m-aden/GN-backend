const mongoose = require('mongoose')
const addressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    point: [{
        point: {
            type:String
        }
    }],
    enabled: {
        type: Boolean,
        default: true
    }
},
    { timestamps: true })
// verify credentials, this a function we use on avatar and not on avatar
addressSchema.methods.addPoint = async function (points) {
    const address = this
    try {
        await points.forEach(point => {
            address.points = address.points.concat({ point })
        });
        await address.save()
        return address
    } catch (e) {
        throw new Error('Probleme d\'ajout de point de livraison')
    }
}
const address = mongoose.model('Address', addressSchema)

module.exports = address