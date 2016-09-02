var express = require('express');

var app = express();

var port = process.env.PORT ||5000;

app.use(express.static('public'));
app.set('views', 'src/views');
app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render('index', list=['a', 'b']);
});

app.get('/books', function(req, res){
	res.send('here comes your books');
});

app.listen(5000, function(err){
	console.log('running your library server on port ' + port);
});
