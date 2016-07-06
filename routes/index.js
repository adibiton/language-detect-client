var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Detect language' });
});

router.get('/searchForm', function(req, res, next) {
	request(`http://ws.detectlanguage.com/0.2/detect?q=${req.query.q}&key=demo`, function(error, response, body){
		if(!error && response.statusCode == 200){
			res.send(JSON.parse(body));
			//res.render('results', { title: 'Detect language', query: req.query.q, results: JSON.parse(body).data.detections});
		}
	});
});

module.exports = router;
