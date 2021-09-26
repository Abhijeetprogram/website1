const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); 



mongoose.connect("mongodb+srv://mongodb1:mongo12345@cluster0.whvld.mongodb.net/abhi?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true

})
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

const noteSchema = {
     name:String,
     password:String,
     email:String
}

const Note = mongoose.model("Note", noteSchema)

//require("./db/conn");

//const Register = require("./models/registers"); 



 
app.get("/" ,function (req,res) {
    res.sendFile(__dirname + "/index.html");

});
app.post("/", function(req,res){
    let newNote = new Note({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email
    });
    newNote.save();
    res.redirect('/');
})

app.listen(port, () =>{
    console.log(`server is running on ${port}`);

})