const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    mobile_no: [String],
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    city_name: String,
    state_id: String,
    country_id: String,
});


const User = mongoose.model("User", userSchema);
exports.User = User;