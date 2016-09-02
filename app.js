var express = require('express');
var app = express();

var port = process.env.PORT ||5000;
var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs'); //sets view engine to ejs

var books =[
{
	title: "Sevenes",
	author: "Neal Stephenson"
},
{
	title: "Wool",
	author: "Hugh Howey"
}
];

bookRouter.route('/')
	.get(function(req, res){
		res.render('books',{
		title: "Books",
		nav: [{
			Link:'/Books',
			Text: 'Books'
		},
		{
			Link: '/Authors',
			Text:'Authors'
		}],
		books: books
	});
});

bookRouter.route('/single')
	.get(function(req, res){
		res.send("hello single book");
	});

app.use('/Books', bookRouter);

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
