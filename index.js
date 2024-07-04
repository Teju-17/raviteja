const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Robix_Data-Base",
  port: 3306,
});
app.post("/register", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const insertqry = "Insert into registrations (email, password) values(?,?)";
  const values = [email, password];
  connection.query(insertqry, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Registration success");
    }
  });
});
app.post("/login", (req, res) => {
  const lemail = req.body.email;
  const lpassword = req.body.password;
  const loginqry =
    "select * from registrations where binary email = ? and binary password = ?";
    console.log(lemail+lpassword);
  connection.query(loginqry, [lemail, lpassword], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(result);
      if(result.length == 0){
        res.status(400).send("Invalid credentials");
      
      }
      else{
         return res.redirect('joinpage.html');
      }
    }
  });
});

app.get("/", (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });           
  return res.redirect("index.html");
});

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})