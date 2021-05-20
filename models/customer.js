const mongoose= require('mongoose')
//default it will put is Employees table
var Customer = mongoose.model('Customer', {
    uname: {type : String},   //these are assigned as coulummns in table
    pwd: {type : String},
    date: {type : Date},
    description: {type : String},
    amount: {type : Number}
})
module.exports= { Customer }