const { Schema, model } = require("mongoose");


const WorkSchema = new Schema(
    {
        id: {
            type: String,
            require: true
        },
        name: {
            type: String,
            require: true
        }
    }
)

module.exports = model("Work", WorkSchema, "works");