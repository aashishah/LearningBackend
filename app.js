"//firstExpress"
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
//"/" => "hi"
// "/bye" => "Goodbye"
// "/dog" => "Bark"

app.get("/", function(req, res){
	res.send("Hi There");
});

app.get("/bye", function(req, res){
	res.send("Goodbye");
});

app.get("/dog", function(req, res){
	res.send("Bark");
});

app.listen(port, function () {
  console.log("Server Has Started!");
});
