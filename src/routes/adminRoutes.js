var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books =[{
	title: "Sevenes",
	author: "Neal Stephenson"
},{
	title: "Wool",
	author: "Hugh Howey"
}];

var router = function(nav){
	
	adminRouter.route('/addBooks')
		.get (function(req, res){
			var url = 'mongodb://matthewskory:Ballstate1@ds019866.mlab.com:19866/library-node';

			mongodb.connect(url, function(err, db) {
				var collection = db.collection('books');
				collection.insertMany(books, function(err, results){
					res.send(results);
					db.close();
					}
				);
			});
				//res.send('inserting books');
		});

	return adminRouter;
};


module.exports = router;