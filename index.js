let express = require('express');
let app = express();

let todo = [1, 2, 3, 4, 5, "priya"];
app.use(express.urlencoded({ extended: true }));
app.use('/cat', express.static("public"));
 
app.use(express.json())
app.get('/', (req, res) => {
  res.send("heloooooo");
});

app.get("/todo", (req, res) => {
  
  res.json(todo);
});

app.post("/todo", (req, res) => {
  console.log(req.body);
  let { value } = req.body;
  todo.push(value);
  res.send("ssssssssss");
});



app.post('/post',(req,res)=>{
  res.send('hiiiiiiiiiii')
})

let port = 5000;
app.listen(port, () => {
  console.log(`server running on port  ${port}`);
});
