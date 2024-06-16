const mongoose = require("mongoose")
const spotSchema = new mongoose.Schema({

    spot_number: {
        type: String,
        unique: true,
        required: true
    },
    location: {
        latitude: {
            type: Number,
            required: true,
            min: -90,
            max: 90
        },
        longitude: {
            type: Number,
            required: true,
            min: -180,
            max: 180
        }
    },
    level: {
        type: String
    },
    section: {
        type: String
    },
    is_occupied: {
        type: Boolean
    },
    vehicle_id: {
        type: mongoose.Schema.ObjectId,
        ref: "Vehical"
    },
    created_at: {
        type: Date,
        Default: Date.now()
    },
    updated_at: {
        type: Date,
        Default: Date.now()
    }

})
module.exports = mongoose.model('parking_spot',spotSchema)