const Vehical = require("../model/vehical")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")


exports.getvehical = async (req,res) =>{
    try {
        const data = await Vehical.find().populate("owner_id")
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true ,message:error.message})
    }
}

exports.postVehical = async (req,res) =>{
    try {
        const data = await Vehical.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putvehical = async (req,res) =>{
    try {
        const data = await Vehical.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteVehical = async (req,res) =>{
    try {
        const data = await Vehical.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
        
    }
}