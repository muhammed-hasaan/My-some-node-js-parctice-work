const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
username:{type : mongoose.SchemaTypes.String},
email:{type : mongoose.SchemaTypes.String},
password:{type : mongoose.SchemaTypes.String}

});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;