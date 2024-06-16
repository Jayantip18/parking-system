const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");



exports.getUser = async (req, res) => {
    try {
     
        const data = await User.find();
        return res.json({ errors: false, data: data });

    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};


exports.postUser = async (req, res) => {
    try {
        const userAvbl = await User.findOne({ email:req.body.email });
        if (userAvbl) return res.status(500).json({ errors: true, message: "User Already Exists" });

        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(req.body.password, salt);

        const data = await User.create(req.body);
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};

exports.putUser = async (req, res) => {
    try {
     
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({ errors: false, data: data });

    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};


exports.deleteUser = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const userAvbl = await User.findOne({ email: req.body.email });
        if (!userAvbl) return res.status(500).json({ errors: true, message: "User Or Password is Invalid" });

        const passCheck = await bcrypt.compare(req.body.password, userAvbl.password);
        if (!passCheck) return res.status(500).json({ errors: true, message: "User Or Password is Invalid" });

        const token = await jwt.sign({ _id: userAvbl.id }, process.env.SEC);
        return res.json({ errors: false, data: { token: token, user: userAvbl } });
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};
