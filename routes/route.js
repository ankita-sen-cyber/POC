const express=require('express')
const rootDir=require('../util/path')
const path= require('path')
const router= express.Router()


router.get('/', (req, res)=> {
    res.sendFile(path.join(rootDir,'views','login.ejs'));
  });
router.use('/dashboard', (req, res)=> {
    res.sendFile(path.join(rootDir,'views','dashboard.ejs'));
  });
  router.use('/about', (req, res)=> {
    res.sendFile(path.join(rootDir,'views','about.ejs'));
  });
  router.use('/team', (req, res)=> {
    res.sendFile(path.join(rootDir,'views','team.ejs'));
  });

// router.use('/',(req,res)=>{
//     res.send("<h1>HI</h1>")
//   })

module.exports=router