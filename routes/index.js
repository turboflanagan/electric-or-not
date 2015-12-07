var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
	MongoClient.connect('mongodb://localhost:27017/vehicle', function(error, db){
		db.collection('vehicle').find().toArray(function(error, result){
			console.log(result);
		});
	});

	//index page should load a random picture/item
	//1. Get all pictures from the MongoDB
	//2. Get the current user from the MOngoDB via req.ip
	//3. Find which photos the current had NOT voted on
	//4. Load all those photos into an array.
	//5. Choose a random image from that array and set it to a var
	//6. res.render the index view and send it the photo

  res.render('index', { title: 'Express' });
});

module.exports = router;
