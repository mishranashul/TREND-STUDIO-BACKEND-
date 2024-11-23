const {Schema, model} = require ("mongoose");

const conatctSchema = new Schema({
username: {type: String, required: true},
email: {type: String, require: true},
message: {type: String, require: true},
});

//create a model
const Contact = new model("Contact", conatctSchema);
module.exports = Contact;