const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ParkingSpot = require("../model/ParkingSpots");



exports.getParkingSpot = async (req, res) => {
    try { 
        const data = await ParkingSpot.find().populate("vehicle_id")
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};


exports.postParkingSpot = async (req, res) => {
    try {
        const data = await ParkingSpot.create(req.body);
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};

exports.putParkingSpot = async (req, res) => {
    try {
     
        const data = await ParkingSpot.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({ errors: false, data: data });

    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};


exports.deleteParkingSpot = async (req, res) => {
    try {
        const data = await ParkingSpot.findByIdAndDelete(req.params.id);
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};


