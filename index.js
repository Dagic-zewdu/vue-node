

const express = require("express")
const cors = require("cors")
const dbConnect = require('./db')
const router = require('./router')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

dbConnect()
app.use("/api", router)

const port = process.env.PORT || 9000
app.listen(port, (err) => {
    if (err) return console.log(err)
    console.log(`Server up and running at ${port}`)
})