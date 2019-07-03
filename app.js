const express = require('express');
const path = require('path');
const app = express();

const port = 3000; 

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index')
});

app.listen(port, () => {
  console.log('Express server running in port ' + port);
});