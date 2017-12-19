module.exports = function(app) {
	
	var api = app.api.dados;

	app.route('/matters').get(api.lista);

	app.route('/questions/:id').get(api.buscaPorId)
};


