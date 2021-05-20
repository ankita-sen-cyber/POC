const express=require('express')
const rootDir=require('../util/path')
const path= require('path')
const router= express.Router()
var ObjectId= require('mongoose').Types.ObjectId //for validating object id
var { Customer }= require('../models/customer')

router.get('/', (req, res)=> {
    res.render('login');
  });
router.use('/dashboard', (req, res)=> {
    res.render('dashboard');
  });
  router.use('/about', (req, res)=> {
    res.render('about');
  });
  router.use('/team', (req, res)=> {
    res.render('team');
  });

// router.use('/',(req,res)=>{
//     res.send("<h1>HI</h1>")
//   })

module.exports=router