var express = require('express');
var router = express.Router();

/* GET home page. */
var tasks = [
	{name : "Learn jQuery", isCompleted : false},
	{name : "Explore JavaScript", isCompleted : false},
	{name : "Master Angular", isCompleted : false},
	{name : "Dive in to Dart", isCompleted : false}
];
router.get('/', function(req, res) {
	setTimeout(function(){
		res.write(JSON.stringify(tasks));
   		res.end();	
	},10000);
});

module.exports = router;