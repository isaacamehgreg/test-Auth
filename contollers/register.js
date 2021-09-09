const mongoose =  require('mongoose');
const path = require('path');
const usermodel = require('../models/users');

//build a function that adds a user to the mongo database
function register (username, password){

 const newuser = usermodel;
 newuser.username = username;
 newuser.password = password;
 newuser.save();

 console.log('user added');
 return

}

module.exports = register;