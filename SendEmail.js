var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'ymail',
  auth: {
    user: 'hgouw@yahoo.com',
    pass: 'Hg061060'
  }
});

var mailOptions = {
  from: 'hgouw@yahoo.com',
  to: 'herman.gouw@lexisnexis.com.au',
  subject: 'Sending Email using Node.js',
  html: '<h1>Hello</h1><p>World!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});