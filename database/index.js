let mongoos = require('mongoose')
 mongoos.connect('mongodb://127.0.0.1:27017/myDataBase').then(()=>{
    console.log('database connect');
 }).catch((err)=>{
 console.log(err);
 })     
 let userdata = new mongoos.Schema({
    id:Number,    
    name:String,
    isbool:Boolean
 })     
 
 let user = mongoos.model('User',userdata)


 let userdata1 = new user({id:1,name:"shalini",isbool:true})
 userdata1.save()
