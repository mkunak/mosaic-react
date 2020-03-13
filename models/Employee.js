const {Schema, model} = require('mongoose');

const employee = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  phonenumber: String,
  birthday_contact: String,
  company: String
});

module.exports = model('Personnel', employee, 'personnel');
