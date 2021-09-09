const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userModel = new Schema({
  username: String,
  password: String,
  date: {default: Date.now}
});

module.exports = userModel;