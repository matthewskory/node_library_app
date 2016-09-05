var express = require('express');

var app = express();

var port = process.env.PORT ||5000;

var nav = [{
			Link:'/Books',
			Text: 'Books'
		},
		{
			Link: '/Authors',
			Text:'Authors'
		}];
var bookRouter = require('./src/routes/bookRoutes.js')(nav); //passing the nav var into the bookrouter function on bookRoutes.js
var adminrouter = require('./src/routes/adminRoutes.js')(nav); //

app.use('/Books', bookRouter);
app.use('/Admin', adminrouter);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs'); //sets view engine to ejs

app.get('/', function(req, res){
	res.render('index',{
		title: "Books",
		nav: [{
			Link:'/Books',
			Text: 'Books'
		},
		{
			Link: '/Authors',
			Text:'Authors'
		}]
	});
});

app.get('/books', function(req, res){
	res.send('here comes your books');
});

app.listen(5000, function(err){
	console.log('running your library server on port ' + port);
});
