var postmark = require("postmark");

exports.mail = (req, res) => {

    var serverToken = "b5719d68-f4e0-4c40-bd78-16d321399b8d";
    var client = new postmark.ServerClient(serverToken)
    
    client.sendEmail({
        "From": "smart.king@pearlsoft.ng",
        "To": "smart.king@pearlsoft.ng",
        "Subject": "Evening task",
        "TextBody": "Hello smart!"
    });    
      
  };

