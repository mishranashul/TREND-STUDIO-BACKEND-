require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.DB_URL
mongoose.connect(url);

const connecDb = async () =>{
    try {
       await (await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }))
       .then(() => {console.log(
        'connected to mogodb'
       )})
       console.log("connect successfully with database",url);
    } catch (error) {
        console.log("Database connection failed");
        process.exit(0);
    }
}

module.exports =  connecDb;