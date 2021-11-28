const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const consultationSchema = new mongoose.Schema({

    initial: {
        type: Boolean,
        required: true     //  initial ou suivi
    },
    date: {
        type: String,
        required: true
    },
    isGN: {
        type: Boolean,
        required: true
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    idPatient: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    patient: {
        type: String,
    },
    motif: {
        type: String,
    },

    antecedents: {
        type: String,
    },
    examen: {
        type: String,
    },
    hypotheses: {
        type: String,
    },
    evalutation: {
        type: String,
    },
    referer: {
        type: Boolean,
    },
    refererContent: {
        type: String,
    },
    referer: {
        type: Boolean,
    },
    ordonnance: {
        type: Boolean,
    },
    medicaments: [{
        medicament: {
            type: String,
        },
        unite: {
            type: String,
        },
        frequence: {
            type: String,
        },
        jours: {
            type: String,
        }
    }],
    analyse: {
        type: Boolean,
    },
    exploration: [{
        analyses: [{
            analyse: {
                type: String,
            }
        }],
        typeI: {
            type: String,
        },
        typeII: {
            type: String,
        },
        typeIII: {
            type: String,
        },
        typeIV: {
            type: String,
        }
    }],
    resultat: {
        type: Boolean,
    },
    resultatId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    enabled: {
        type: Boolean,
        default: true
    },

},
    { timestamps: true })


consultationSchema.methods.toJSON = function () {
    const consultation = this
    const consultationObject = consultation.toObject()
    delete consultationObject.password
    delete consultationObject.tokens
    return consultationObject
}


const Consultation = mongoose.model('consultations', consultationSchema)

module.exports = Consultation