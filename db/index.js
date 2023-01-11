const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
const dburl = process.env.DATABASE_URL

const dbConnect = (databaseUrl = dburl) => {
    return mongoose
        .connect(databaseUrl)
        .then(() => console.log("Database connected"))
        .catch((err) => console.error("Database connection failed", err));
};

module.exports = dbConnect