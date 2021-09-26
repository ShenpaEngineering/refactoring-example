const express = require("express");
const app = express();
app.use(express.static("public"))

app.get("/", function(request, res) {
    console.log("home")
    res.sendFile(__dirname + "/index.html");
});

app.get("/api", function(request, res){
    //some very slow operation
    setTimeout(function(){
        let status = 'Good'
        res.json({ fullname: request.query.fullname , email: request.query.email, status: status })
    },3000);
});

const listener = app.listen(8080, () => {
    console.log("running the server on " + 8080);
});