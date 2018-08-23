let express = require("express");
let app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/step15-classes.html");
});

app.listen(5050);
console.log("server is now live on localhost:5050");