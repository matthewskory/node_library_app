var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var router = function(nav){
bookRouter.route('/')
	.get(function(req, res){
		var url = 'mongodb://matthewskory:Ballstate1@ds019866.mlab.com:19866/library-node';

			mongodb.connect(url, function(err, db) {
				var collection = db.collection('books')
				collection.find().toArray(
					function(err, results){
						res.render('books',{
							title: "Book List",
							nav: nav,
							books: results
						});
					});
			});
});

bookRouter.route('/:id')
	.get(function(req, res){
			var id = new objectId(req.params.id);
			var url = 'mongodb://matthewskory:Ballstate1@ds019866.mlab.com:19866/library-node';

			mongodb.connect(url, function(err, db) {
				var collection = db.collection('books');

				collection.findOne({_id : id},
					function(err, results){
						
						res.render('bookView',{
						title: "Book Details",
						nav: nav,
						book: results						
					});
				}
			);
		});
	});
return bookRouter;
} ;


module.exports = router;