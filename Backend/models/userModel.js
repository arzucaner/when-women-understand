const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please enter a username"],
  },
  password: {
    type: String,
    require: [true, "Please enter a password."],
  },
  email: {
    type: String,
    require: [true, "Please enter an email."],
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

const User = mongoose.model("User", userSchema);

module.exports = User;
