var express = require('express');
var app = express();

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

app.get('/', function(req,res){
    var title = "Jinal Patel";
    res.render('home', {title:title });
});

app.listen(8000, function(){    
});