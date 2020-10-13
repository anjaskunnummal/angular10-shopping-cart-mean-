const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require ('cors');
const path = require ("path");
const bodyParser = require ('body-parser');
dataBaseConfig = require('./database/db');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL||dataBaseConfig.db, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)
const products = require ('./routes/products')
//const dataPath = "./data/data.json";
const app = express();
///////////////////////////////////////
// Create link to Angular build directory

app.use(express.static('../dist/test/index.html'));
///////////////////////////////////////
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.listen(3000,()=>
{
    console.log("server running on port 3000 ")
})
app.use('/', products);