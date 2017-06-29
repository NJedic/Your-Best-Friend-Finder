// DEPENDENCIES
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var path = require("path");

// ROUTING
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = function(app){

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// Default to:
	app.use(function(req, res){
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};