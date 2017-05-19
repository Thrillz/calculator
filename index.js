var app = require('express')();
var http = require('http');
var path = require('path');

app.use(express.static(path.join(__dirname, 'theapp')));

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'theapp/index.html'));
});

app.listen(process.env.PORT || 3000);
