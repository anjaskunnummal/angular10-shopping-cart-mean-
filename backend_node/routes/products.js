const express = require('express');
const fs = require('fs');
const path = require ("path");
const dataPath = "./data/data.json";
const fashionPath = "./data/fashion.json";
const router = express.Router();
let Cart = require('../model/Cart');
let Checkout = require ('../model/Checkout');

router.get('/mobiles',(req,res)=>{
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
    res.send(JSON.parse(data));
  })
})
//Push product into cart
router.route('/add-cart').post((req, res, next) => {
 Cart.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)

    }
  })
});

//push address into cart
router.route('/add-checkout').post((req,res,next)=>{
  Checkout.create(req.body,(err,data)=>{
    if (err){
      return next(err);
    }
    else{
      res.json(data);
    }
  })
})

//Get All Item From Cart
 router.route('/get-cartitem').get((req, res) => {
    Cart.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data);
      }
    })
  })

  //Get Checkout Details
  router.route('/get-address').get((req,res)=>{
    Checkout.find((err,data)=>{
      if (err){
        return next(err)
      }
      else{
        res.json(data);
      }
    })
  })

//Get Cartlength
router.route('/cart-length').get((req,res)=>{
  Cart.countDocuments({},(err, count)=>{
console.log( "Number of items: ", count );
    if(err){
      return next(err)
    }else{
      res.json(count)
    }
});
})



  router.get('/fashions',(req,res)=>{
    fs.readFile(fashionPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
   res.send(JSON.parse(data));
  })
  })

  //Delete Product from cart
 router.route('/delete-cartItem/:id').delete((req, res, next) => {
   Cart.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  

  module.exports=router;