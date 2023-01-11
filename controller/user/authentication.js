const { User } = require('../../models/user')
const bcrypt = require('bcryptjs')
const sendError = require('../../utils/sendError')
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv")
const { removeItemFromObject } = require('../../utils')
dotenv.config()
const JWT = process.env.JWT

const Authentication = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            sendError("User is not registered with this email before", res)
            return
        }
        const compare = await bcrypt.compare(req.body.password, user.password)
        if (compare) {
            const Token = jwt.sign({ id: user._doc._id }, JWT)
            res.send({ ...removeItemFromObject(user._doc, "password"), Token })
            return
        }
        sendError("Password error", res)
    }
    catch (err) {
        console.log(err)
        sendError(err?.message, res)
    }
}

module.exports = Authentication