const express=require('express')
const rootDir=require('../util/path')
const path= require('path')
const router= express.Router()
var ObjectId= require('mongoose').Types.ObjectId //for validating object id
var { Customer }= require('../models/customer')

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res)=> {
  
    res.render('login');
    
  });

  router.post('/',(req, res)=>{

    console.log(req.body.uname)


    var emp = new Customer({
            uname:req.body.uname,       //to get name use body method
             pwd:req.body.pwd,
             
        });
        Customer.find((err,docs)=>{
          if(!err)
          {   let i=0;
              //res.send(docs);
              while(i<docs.length)
              {
                 if(docs[i].uname=emp.uname&&docs[i].pwd==emp.pwd)
                 res.render('dashboard')
                 i++;
              }
          }
      })

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


// router.post('/',(req,resp)=>{
//   var emp = new Customer({
//       uname:req.body.uname,       //to get name use body method
//        pwd:req.body.pwd,
       
//   });
//   emp.save((err,doc)=>
//   {
//       if(!err){
//           resp.send(doc)
//       }
//       else
//       {
//           console.log("error retrieving employees :"+JSON.stringify(err,undefined,2))
//       }
//   })
// });

module.exports=router