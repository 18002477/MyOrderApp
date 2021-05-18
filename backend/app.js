const express = require('express');

const app= express();
app.use('/api/orders',(req,res,next)=>
{
  const orders = [
    {
      id: "2jofunisr3od",
      userName: "molly_001",
      Email:"molly@sales.com",
      PlaceOrder:"cheese cake from server"
    },
    {
      id: "2jofunisr3od",
      userName: "molly_002",
      Email:"molly@sales.com",
      PlaceOrder:"Lemon Pie from Server"
    }
  ];
  res.json(
    {
      message:'Orders retrieved from Server successfully',
      orders:orders
    }
  );

});

// not Working
module.exports = app;
