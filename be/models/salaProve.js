const mongoose = require('mongoose')


const salaProveSchema = new mongoose.Schema ({
    title: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },

    price: {
        type: String,
        require: true,
    },
    
})

const SalaProve = mongoose.model ('SalaProve', salaProveSchema);

module.exports= SalaProve;


