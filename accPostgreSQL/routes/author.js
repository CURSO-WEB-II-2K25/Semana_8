var express = require('express');
var router = express.Router();

/* GET author listing. */
router.get('/', function(req, res, next) {
	salida = {
		status_code:200,
		status_message: 'Ok',
		data:{
			name: 'Esteban Amores',
			nickname: 'MrAmores',
			occupation: 'Computer Student',
			since: 2005
		}
	};
	res.set('Content-Type', 'application/json').status(200).send(salida);
});

module.exports = router;