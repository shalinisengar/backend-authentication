let express = require('express')
let app = express()
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
let arr =[
  {
    id:0,
    userName:"Srashti",
    comment:"Besti"

  },
  {
    id:1,
    userName:"Shalini",
    comment:"Nothing"

  },
  {
    id:2,
    userName:"Priya",
  comment:"beauty queen"

  },{
    id:3,
    userName:"Pooja",
    comment:"cute pie"

  },{
    id:4,
    userName:"Mohini",
    comment:"Sherni"

  },{
    id:5,
    userName:"prachi",
    comment:"gurjar"

  },
]


app.get('/', (req, res) => {
  res.send('this is home file')
})


app.get('/blog',(req,res)=>{
  res.render('blog',{arr})

})

app.get('/blog/new',(req,res)=>{
  res.render('new')
})

app.post('/blog',(req,res)=>{
  console.log(req.body)
  let{ userName,comment}=req.body
  arr.push({userName,comment,id:arr.length})
  res.redirect('/blog')
})

app.get('/blog/:id',(req,res)=>{

  console.log(req.params,"rrrr")

  let {id}=req.params

   

   let SearchC=   arr.filter((key)=>{
        return key.id==id
      })
      console.log(SearchC)



  // res.send('idddd')
  res.render('show',{SearchC})
})

app.get('/blog/:id/edit',(req,res)=>{
  let {id}=req.params

    let upatedData=  arr.find((key)=>{
      return key.id==id
    })

    console.log(upatedData,"updateddd")

  res.render('edit',{upatedData})

})


   app.patch('/blog/:id',(req,res)=>{
    console.log(req.body," data aa gyaaa")
    let {id}=req.params
   let editedData=    arr.find((k)=>{
        return k.id==id
       })
       console.log(editedData,"ee")
       let {comment}=req.body
       editedData.comment=comment
        res.redirect('/blog')

   })

   app.delete('/blog/:id',(req,res)=>{
    let {id}=req.params
     let newArr=  arr.filter((d)=>{
        return d.id!=id
       })
       arr=newArr
       res.redirect('/blog')
    // res.send('delet ho gyaaaaa ')

   })




let port = 3000
app.listen(port, () => {
  console.log(`server running on port  ${port}`)
})


// xttp li update method
// put
// patch
//delete


// --------------------------------------------------------------------------------------------------------------
// let data = require('./index.js')
// console.log(data.sum(4,5));
// console.log(data.add,'ssssssssss');

// let fs = require('fs')

// console.log(fs);

//write(create) operation
// fs.writeFileSync('abc.txt', "hello  new file")


//read operation
// let data =fs.readFileSync('anc.txt')
// console.log(data.toString(),"ssss");


//Updatefile operation
// fs.appendFileSync('anc.txt', " new change")


//delete file opration
// fs.unlinkSync('anc.txt')


//npm 
// let joke = require('give-me-a-joke')
// joke.getRandomDadJoke((data)=>{
//     console.log(data);
// })



// let express = require('express')
// let app = express()


// app.get('/home',(req,res)=>{
//     res.render()
//     res.send(' form submit!!!!!!' )
// })
// app.use((req,res)=>{
//     res.send('hello server')
// })


//path perameter 
//dynamic request
// app.get('/:request',(req,res)=>{
//      let {request} = req.params
//    res.send(`${request}`)
// })
// app.get('/new',(req,res)=>{
//     res.send('<h2> This in new page </h2>')
//  })



//query perameter

// app.get('/search' , (req,res)=>{
//     console.log( req.query,'sss');
//     let {firstName , lastName} = req.query
//     res.send(` FirstName = ${firstName}   lastName = ${lastName}`)
// })

// let todo = ['gym','cat0','dog']
// app.set('view engine','ejs')


// app.get('/', (req, res)=>{
  
//     let random =Math.random()*100
//     res.render('index',{random})
// })
  
//   app.get('/', (req,res)=>{
   
//     res.render('home')
//   })

  
// app.get('/home', (req,res)=>{+
//     res.render('home')
// })
//  app.get('/*',(req,res)=>{
//     res.send('<h2> wrong site </h2>')
//  })
 
// app.get('/user',(req,res)=>{
//    let {userName, number}= req.query
//    res.send(`${userName} ${number}`)
    
// })
// app.post('/user',(req,res)=>{
//     console.log(req.query,'sss');
//    // let {userName, number}= req.query
//     res.send('form !!!!')
     
//  })

// app.listen(4000,()=>{
//     console.log('server running on part no 4000');                          
// })  


