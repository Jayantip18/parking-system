const mongoose = require("mongoose")

const vehicalSchema = new mongoose.Schema({
    
    license_plate: {
        type:String,
        required:true,
        unique:true
    },
    make:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    } ,
    color:{
        type:String,
        required:true
    } ,
    owner_id:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    } ,
    created_at:{
        type:Date,
        Default:Date.now()
    },
    updated_at:{
        type:Date,
        Default:Date.now()
    }

})

module.exports = mongoose.model('Vehical',vehicalSchema)


