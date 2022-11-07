
// "use strict";
// const nodemailer = require("nodemailer");
// const sendtoemails = async (req, res) =>{
//     const details = await client.find()
//     // console.log(details)
//     const mails = details.map(emails => emails.email)
//     // console.log(mails);

//     const filteredMails = mails.filter(mail => mail !== undefined )
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           type: 'OAuth2',
//           user: "smartkings48@gmail.com",
//           pass: "dominionboy9090",
//           clientId: "48147539132-8ep60bkgq6gm2drsurh3kc75gi264747.apps.googleusercontent.com",
//           clientSecret: "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",
//           refreshToken: "1//04xrRshlPp5nUCgYIARAAGAQSNwF-L9IrkyLYzmC2Gni8V5MRZMYTkl5zu6VZFzNwwof5AKpa1j1hp7tfq3ZLxsACPlWlxZO8veo"
//         }
//       });
    
//       let mailOptions = {
//         from: "smartkings48@gmail.com",
//         to: "smartkings48@gmail.com",
//         subject: 'Nodemailer Project',
//         text: "email body"
//       };
    
//       transporter.sendMail(mailOptions, function(err, data) {
//         if (err) {
//           console.log("Error " + err);
//         } else {
//           console.log("Email sent successfully");
//         }
//       });
//     res.status(200).json({filteredMails})
//  }

// // app.post("/sendtoemails",sendtoemails)

//   // create reusable transporter object using the default SMTP transport
 
