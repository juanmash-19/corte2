const mongoose = require("mongoose")
const URI = "mongodb+srv://quiz1:1234@cluster0.ajmanst.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
    await mongoose.connect(URI);
}

module.exports = connect;