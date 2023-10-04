const { Schema, model } = require("mongoose");
const Work = require("./Work")

const UserSchema = new Schema(
    {
        firstname: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        work: {
            type: Schema.Types.ObjectId,
            ref: Work,
        },
        type_document: {
            type: String,
            require: true
        },
        document_number: {
            type: String,
            require: true
        }
    }
)

module.exports = model("User", UserSchema, "users");