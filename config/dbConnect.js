const mongoose = require('mongoose')
const dbConnect = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected sucessfully");
    } catch (error) {
        console.log("database connection failed", error.message);
    }
}

dbConnect()

