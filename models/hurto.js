const {Shema, model, Schema} = require('mongoose')

const HurtoSchema = Schema({
    direccion:{
        type: String,
        required: [true, 'La dirección es obligatoria']
    },

    latitud:{
        type: Number,
        validate: {
            validator: (value) => {
                return value <= 6.217 && value >= 6.13;
            },
            message: 'La latitud no es valida'
        },
        required: [true, 'La latitud es obligatoria']
    },

    longitud:{
        type: Number,
        validate:{
            validator: (value) => {
                return value <= -75.34 && value >= -75.567
        },
        message: 'La longitud no es validad'
        },
        required: [true, 'La latitud es obligatoria']
    },

    descripcion:{
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },

    fecha:{
        type: Date,
        default: Date.now
    }

})

module.exports = model('Hurto', HurtoSchema)