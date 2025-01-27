var express = require('express');
var bodyParser=require('body-parser');
var app = express();
app.use(bodyParser.json());



app.post('/',function(req,res){
    let JSONData= req.body;
    let name=JSONData['name']
    let city=JSONData['city']

    res.send(name+"    "+city);
})


app.listen(7000, function () {
    console.log("Server running successfully on port 7000");
});
