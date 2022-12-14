const express =  require('express') ; 
const mongoose = require('mongoose')
const router =  require('./routes/User');
const blogRouter = require('./routes/Blog')
const cors = require('cors');
const path = require('path')
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog" , blogRouter)



// app.use(express.static(path.resolve("./frontend/build"))); 
// app.get("*" , (req,res)=> {
//   res.sendFile(path.resolve("./frontend/build/index.html"))
// })


app.use(express.static(path.join(__dirname , "./frontend/build"))); 
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

mongoose.connect(
    "mongodb+srv://vicky:vic@cluster0.3ifpvrn.mongodb.net/BlogAppretryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connection Succesfull  & Listening to localhost Port 5000")
    )
  )
  .catch((err) => console.log(err));