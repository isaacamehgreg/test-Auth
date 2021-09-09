const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userModel = new Schema({
  username: String,
  password: String,
  date: Date
});

module.exports = userModel;