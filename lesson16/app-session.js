var express = require('express');
var session = require('express-session');

var app = express();
app.listen(5000);

app.use(session({
    secret: 'recommand 128 bytes random string',
    cookie: {maxAge: 60*1000}
}));

app.get('/', function(req, res){
    if(req.session.isVisit) {
        req.session.isVisit++;
        res.send('<p>第' + req.session.isVisit +'次访问');
    }else {
        req.session.isVisit = 1;
        res.send('第一次访问');
        console.log('req.session:', req.session);
    }
})