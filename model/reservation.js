const mongoose = require("mongoose")

const reserSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    vehicle_id: {
        type: mongoose.Schema.ObjectId,
        ref: "Vehical"
    },
    parking_spot_id:
    {
        type: mongoose.Schema.ObjectId,
        ref: "parking_spot"
    },
    reservation_start: {
        type: Date,
        default: Date.now()
    },
    reservation_end: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
}
)

module.exports = mongoose.model('Reservation', reserSchema)