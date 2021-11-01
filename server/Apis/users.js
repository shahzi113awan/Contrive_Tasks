let mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
let userList = 
    


router.get("/users", (req, res, next) => {
  if (req.method === 'GET') {
   const users = require("../users")
   res.send(users)}
  });
 router.get("/evenUsers", (req, res) => {
  const users = require("../users")
  const filtered = users.filter(a => a.id %2 ===0);
res.send(filtered)  
  });
 router.get("/activeUsers", (req, res) => {
  const users = require("../users")
  const filtered = users.filter(a => a.status  ==='active');
res.send(filtered)  
  });

  
  module.exports = router;