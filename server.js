const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose");
const userRoutes = require("./routes/UserRoutes");
const app = express();



app.use(cors());
app.use(express.json());

mongoose
//  .connect("mongodb+srv://patilnikhil1033:buorQ2hkaz1yOg9X@cluster0.2ocok0z.mongodb.net/netflix",{
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
//   })
.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  
  .then(()=>{
    console.log("DB Connected");

 });

app.use("/api/user",userRoutes);


app.listen(4000,console.log("server started"));