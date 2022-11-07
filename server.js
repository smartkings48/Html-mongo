const express = require("express");
const email = require("./email");
const app = express();
const mongoose=  require("mongoose");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

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

const sendtoemails = async (req, res) =>{
    const details = await client.find()
    // console.log(details)
    const mails = details.map(emails => emails.email)
    console.log(mails);

    const filteredMails = mails.filter(mail => mail !== undefined )
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: "smartkings48@gmail.com",
          pass: "dominionboy9090",
          clientId: "48147539132-8ep60bkgq6gm2drsurh3kc75gi264747.apps.googleusercontent.com",
          clientSecret: "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",
          refreshToken: "1//04xrRshlPp5nUCgYIARAAGAQSNwF-L9IrkyLYzmC2Gni8V5MRZMYTkl5zu6VZFzNwwof5AKpa1j1hp7tfq3ZLxsACPlWlxZO8veo"
        }
      });
    // console.log(filteredMails);

    const mailss = filteredMails.toString()
      let mailOptions = {
        from: "smartkings48@gmail.com",
        
        to: mailss,
        subject: 'Email App',
        text: req.body.mailbody
      };
    
      transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
      });
    res.status(200).json({filteredMails})
 }

app.post("/sendtoemails",sendtoemails)


