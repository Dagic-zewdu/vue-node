const { User } = require('../../models/user')
const bcrypt = require('bcryptjs')
const sendError = require('../../utils/sendError')
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv")
const { removeItemFromObject } = require('../../utils')
dotenv.config()
const JWT = process.env.JWT

const signup = async (req, res) => {
    try {
        const body = req.body
        const find = await User.findOne({ email: body.email })
        if (!body.email || !body.password) {
            sendError("Email and password should be present", res)
            return
        }
        if (find) {
            sendError("User has been registered with this email before", res)
            return
        }
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(body.password, salt);
        const user = new User({
            ...req.body,
            password
        })
        const savedUser = await user.save()
        const newUser = removeItemFromObject(savedUser._doc, "password")
        const Token = jwt.sign({ id: savedUser._doc._id }, JWT)
        res.send({ ...newUser, Token })
    }
    catch (err) {
        console.log(err?.message, "error while saving")
        sendError(err?.message, res)
    }
}

module.exports = signup 