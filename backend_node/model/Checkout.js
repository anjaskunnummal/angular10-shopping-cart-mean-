const mongoose = require ('mongoose');
const Schema=mongoose.Schema;
let Checkout = new Schema({
    first_name:{type:String},
    last_name:{type:String},
    email:{type:String},
    house_name:{type:String},
    pincode:{type:Number},
    correct_location:{type:String},
    city:{type:String},
    state:{type:String},
    phone_number:{type:Number}
})

module.exports=mongoose.model('Checkout',Checkout);