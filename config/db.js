const mongoose = require("mongoose")
require('dotenv').config();

const DB_URL = process.env.DB_URL;

 const connectDb = async() => {
    mongoose.connect(DB_URL, {

    }).then(() => {
        console.log("DB connection successful");
    }).catch((error) => {
        console.log("Issue in DB connection");
        console.error(error);
        process.exit(1);
    })
}

module.exports = connectDb;