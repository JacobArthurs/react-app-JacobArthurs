const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/send_mail", cors(), async (req, res) => {
  let { data } = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: `Personal Website Contact Form, ${data.name}`,
    html: `<ul className="email" style="
    padding: 5px;
    margin-left: 5px;
    font-family: sans-serif;
    font-size: 15px;
    overflow-wrap: break-word; 
    "><li><h2>From: ${data.name} (${data.email})</h2></li><br/>
    <li><h3>Phone?: ${data.phoneNo}</h3></li><br/><li><h3>Message: ${data.message}</h3></li></ul>`,
  });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
