const mongoose = require("mongoose")

const tranSchema = new mongoose.Schema({
    reservation_id: {
        type: mongoose.Schema.ObjectId,
        ref: "Reservation"
    },
    amount: {
        type: Number,
        required: true
    },

    payment_method: {
        type: String,
        required: true
    },
    transaction_date: {
        type: Date,
        default: Date.now()
    },
    status:{
       type:String,
       required:true
    },
    created_at:{
        type: Date,
        default: Date.now()
    },
    updated_at:{
        type: Date,
        default: Date.now()
    }
}
)

module.exports = mongoose.model('Transaction', tranSchema)