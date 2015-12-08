var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
	MongoClient.connect('mongodb://localhost:27017/Galant', function(error, db){
		//1. Get all pictures from the MongoDB
		db.collection('Galant_images').find().toArray(function(error, result){
			allPhotos = result;
			//2. Get the current user from MongoDB vai req.ip
			var currIP = req.ip;

			db.collection('users').find({ip:currIP}).toArray(function(error, userResult){
				// console.log(allPhotos);
				console.log(userResult);

					for(i=0; i<userResult.length; i++){
						
					}
				}
			});



			//5. Choose a random image from teh array and set it to a var
			var rand = Math.floor(Math.random()*result.length);
			//6. res.render the index view and send it the pic
			res.render('index', { photo: result[rand] });
		})
	});	

	
	//3. Find which photos the current user has NOT voted on
	//4. Load all those photos into an array.

});;

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


	router.get('/standings', function(req, res, next) {
	//1. get ALL the photos
	//2. Sort them by highest likes
	//3. res.render the standings view and pass it the sorted photo array 
	res.render('index', {title: 'Standings'});
});

router.get('/electric', function(req, res, next) {
	res.render('index', {pic: 'Standings'});
});

router.post('/electric', function(req,res,next){
	MongoClient.connect('mongodb://localhost:27017/Galant', function(error, db){
		db.collection('users').insertOne( {
	      ip: req.ip,
	      vote: "electric",
	      image: req.body.photo
		});
		res.redirect('../');
	});	
});

router.post('/poser', function(req,res,next){
	MongoClient.connect('mongodb://localhost:27017/Galant', function(error, db){
		db.collection('users').insertOne( {
	      ip: req.ip,
	      vote: "poser",
	      image: req.body.photo
		});
		res.redirect('../');
	});	
});

function vote(req, res){
}

module.exports = router;



