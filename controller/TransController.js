const Transaction = require("../model/transaction")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")


exports.getTran = async (req,res) =>{
    try {
        const data = await Transaction.find().populate("reservation_id")
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true ,message:error.message})
    }
}

exports.postTran = async (req,res) =>{
    try {
        const data = await Transaction.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putTran = async (req,res) =>{
    try {
        const data = await Transaction.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteTran = async (req,res) =>{
    try {
        const data = await Transaction.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
        
    }
}