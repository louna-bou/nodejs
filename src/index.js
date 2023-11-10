//exercice 0:
console.log("message javascript du serveur");

var myApp = require("simple-hello-world-example");
var msg = myApp.printMsg();

let express = require("express");
let app = express();

app.use("/dream", express.static("public"));
app.get("/form", function (req, res) {
  res.sendfile("public/tva.html");
});

//   le formulaire ne doit pas avoir enctype=« multipart/form-data »
let bodyParser = require("body-parser");
// utiliser le module middleware de parsing
app.use(bodyParser.urlencoded({ extended: true }));

// route post formulaire
app.post("/tva", function (req, res) {
  var tva = req.body.HT * (req.body.TVA / 100);
  var cal = req.body.HT * (1 + req.body.TVA / 100);
  res.send(
    `Prix HT : ${req.body.HT} | Prix TVA : ${tva} | TTC : ${parseInt(cal)}`,
  );
});

app.listen(8080);
