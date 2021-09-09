const { builtinModules, Module } = require('module');
const mongoose =  require('mongoose');
const path = require('path');
const user = require(path.join(__dirname, 'models/auth/users'))

//build a function that adds a user to the mongo database
const addUser = async (username, password) =>{

 const newuser = new user;
 newuser.username = username;
 newuser.password = password;
 newuser.save();

 console.log('user added');
 return

}
Module.exports = addUser;