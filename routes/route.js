const express=require('express')
const rootDir=require('../util/path')
const path= require('path')
const router= express.Router()


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


module.exports=router