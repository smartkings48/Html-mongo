const express = require("express");
const app = express();
const mongoose=  require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/mail');

// "mongodb+srv://smartkings:dominionboy9090@atlascluster.3lwgp1j.mongodb.net/clients"

// create a data schema

const clientSchema = mongoose.Schema({
 name: String,

 email: String,

 phone_number : String,

 office_address : String
})

const client = mongoose.model("client", clientSchema)

app.get("/", function (req,  res) {
    res.sendFile(__dirname + "/index.html"); 
});



app.post("/", function  (req, res){
    let newClient = new client({
        name:req.body.name,

        email:req.body.email,

        phone_number: req.body.phone,

        office_address: req.body.address
    })

    
    newClient.save();
    res.redirect("/");
});
const getcustomers = async (req, res) =>{
   const data = await client.find()
   res.status(200).json({data})
}
app.get("/cust", getcustomers)

app.listen(2000, function(){
    console.log("Server is running on 2000");
})