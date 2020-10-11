const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Cart = new Schema({
  id:{type:Number},
 name: {type: String},
description: {type: String},
  price: {type: Number},
 quantity: {type: Number},
 Image: {type: String}
})

module.exports = mongoose.model('Cart', Cart);