const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const cert = fs.readFileSync('keys/certificate.pem');
const options = {
  server:{sslCA: cert}};

const Order = require('./model/order')

const app= express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://cedric_12:bFn6dJsjrmwg9snx@cluster0.8ahpp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>
{
  console.log("Connected to DB Successfully ! YAY")
})
.catch(()=>
{
  console.log('Apparently not !!!')
});

app.get('/api/orders',(req,res,next)=>
{
  Order.find().then((documents)=>{
    res.json(
      {
         message: 'Orders retrieved from Server successfully',
         orders:documents
      });
  });
});

app.use((req,res,next)=>
{
  res.setHeader("Access-Control-Allow-Origin",'*');
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods",
  "GET","POST","OPTIONS","PATCH","DELETE");
  next();
});

app.post('/api/orders',(req,res,next)=>
{
  const orders = new Order(
    {
      userName: req.body.userName,
      Email: req.body.Email,
      PlacedOder: req.body.PlacedOder
    }
  );
  orders.save();
  console.log(orders);
  res.status(201).json({
    message:'Order Successfully created'
  });
});

// app.use('/api/orders',(req,res,next)=>
// {
//   const orders = [
//     {
//       id: "2jofunisr3od",
//       userName: "molly_001",
//       Email:"molly@sales.com",
//       PlacedOrder:"cheese cake from server"
//     },

//     {
//       id: "2jofunisr3od",
//       userName: "molly_002",
//       Email:"molly@sales.com",
//       PlacedOrder:"Lemon Pie from Server"
//     }
//   ];
//   res.json(
//     {
//       message:'Orders retrieved from Server successfully',
//       orders:orders
//     }
//   );

// });

module.exports = app;
