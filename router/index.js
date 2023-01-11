const express = require("express")
const { userProfile, updateProfile } = require('../controller/user')
const protectRoute = require('../controller/user/auth')
const Authentication = require('../controller/user/authentication')
const signup = require('../controller/user/singup')
const router = express.Router()

router.post("/authentication", Authentication)
router.post("/signup", signup)
router.get("/user", userProfile)
router.post("/user", protectRoute, updateProfile)
module.exports = router