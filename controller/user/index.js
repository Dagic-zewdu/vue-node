const sendError = require('../../utils/sendError')
const jwt = require('jsonwebtoken')
const { User } = require('../../models/user')
const dotenv = require("dotenv")
const { removeItemFromObject } = require('../../utils')
dotenv.config()
const JWT = process.env.JWT

const userProfile = async (req, res) => {
    try {
        const token = req.header("Token")
        const verify = jwt.verify(token, JWT)
        const _id = verify.id
        const user = await User.findById(_id)
        if (!user) {
            sendError("User is not registered with this token", res)
            return
        }
        res.send({ ...removeItemFromObject(user._doc, "password"), Token: token })
    }
    catch (err) {
        console.log(err)
        sendError(err.message, res)
    }
}
const updateProfile = async (req, res) => {
    try {
        const { id } = req
        const updateUser = await User.findByIdAndUpdate(id, { ...removeItemFromObject(req.body, "password") })
        const user = await User.findById(id)
        res.send({ ...removeItemFromObject(user._doc, "password") })
    }
    catch (err) {
        console.log(err)
        sendError(err.message, res)

    }
}
module.exports = { userProfile, updateProfile }