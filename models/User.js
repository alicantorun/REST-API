const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  registerDate: {
    type: Date,
    required: true,
    default: new Date()
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
