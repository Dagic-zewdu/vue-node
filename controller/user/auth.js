const sendError = require('../../utils/sendError')
const jwt = require('jsonwebtoken')
const { User } = require('../../models/user')
const dotenv = require("dotenv")
const { removeItemFromObject } = require('../../utils')
dotenv.config()
const JWT = process.env.JWT

const protectRoute = async (req, res, next) => {
    try {
        const token = req.header("Token")
        const verify = jwt.verify(token, JWT)
        const _id = verify.id
        const user = await User.findById(_id)
        if (!user) {
            sendError("Authentication error Don't have the right access to share resources", res)
            return
        }
        req.id = user._doc._id
        next()
    }
    catch (err) {
        console.log(err)
        sendError(err.message, res)
    }
}

module.exports = protectRoute