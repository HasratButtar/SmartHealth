'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    address: String,
    city: String,
    Country: String,

    PaymentDue: float

});

module.exports = mongoose.model('User', UserSchema);
// add more specific fields later on..