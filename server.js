var http = require('http');
var app = require('./config/express');


http.createServer(app)
.listen(process.env.PORT || 8080, function() {
	console.log('Servidor Executando');
});
