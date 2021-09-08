const mongoose =  require('mongoose');
const { dirname } = require('path');
const path = require('path');
const userModel = require(path.join(__dirname, 'models/auth/users'))

//build a function that adds a user to the mongo database
const addUser = async (username, password) =>{
    
}