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



	//1. Style middle
	//2. Add buttons
	//3. Pull from Mongo
	//4. Pass var to view
	//5. Display 1 random image

	var serverPhotos = [
	{name: 'images/1.jpeg'},
	{name: 'images/2.jpeg'},
	{name: 'images/3.jpeg'},
	{name: 'images/4.jpeg'},
	{name: 'images/5.jpeg'},
	{name: 'images/6.jpeg'},
	{name: 'images/7.jpeg'},
	{name: 'images/8.jpeg'},
	{name: 'images/9.jpeg'},
	{name: 'images/10.jpeg'},
	{name: 'images/11.jpeg'},
	{name: 'images/12.jpeg'},
	{name: 'images/13.jpeg'},
	{name: 'images/14.jpeg'},
	{name: 'images/15.jpeg'},
	{name: 'images/16.jpeg'},
	{name: 'images/17.jpeg'},
	{name: 'images/18.jpeg'},
	{name: 'images/19.jpeg'},
	{name: 'images/20.jpeg'},
	];

  res.render('index', { photos: serverPhotos });
});

router.get('/standings', function(req, res, next){
	//1. get ALL the photos
	//2. Sort them by hightse likes
	//3. res.render the standings view and pass it the sorted photo array
	res.render('index', {title: 'Standings'});

});

router.post('*', function(req, res, next){
	//this will run for all posted pages
});
module.exports = router;
