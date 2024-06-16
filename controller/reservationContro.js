const Reservation = require("../model/reservation")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")


exports.getReser = async (req,res) =>{
    try {
        const data = await Reservation.find().populate("user_id").populate("vehicle_id").populate("parking_spot_id")
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true ,message:error.message})
    }
}

exports.postReser = async (req,res) =>{
    try {
        const data = await Reservation.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putReser = async (req,res) =>{
    try {
        const data = await Reservation.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteReser = async (req,res) =>{
    try {
        const data = await Reservation.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
        
    }
}