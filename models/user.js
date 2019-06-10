const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true},
    password:{type: String, required: true},
    streetAddress: {type: String, required: true},
    city: {type: String, required:true},
    userState: {type: String, required:true},
    date: {type: Date, default: Date.now}
});

const User = mongoose.model("User", userSchema )

module.exports = User;