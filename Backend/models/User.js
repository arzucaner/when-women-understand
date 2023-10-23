const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please enter a username"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please enter a password."],
  },
  email: {
    type: String,
    require: [true, "Please enter an email."],
    unique: true,
  },
  nickname: {
    type: String,
  },
  firstName: {
    type: String,
    require: [true, "Please enter a first name."],
  },
  lastName: {
    type: String,
    require: [true, "Please enter a last name."],
  },
});

module.exports = mongoose.model("User", UserSchema);