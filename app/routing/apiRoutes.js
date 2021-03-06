// IMPORT DATA
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var friends = require("../data/friends");

module.exports = function(app){

	// Display the API
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	// Post new survey data to the API
	app.post("/api/friends", function(req, res){
		friends.push(req.body);
		

// Compatibility logic to compare the existing friends for the best match
  var comparisonArray = [];
  var newFriendScores= req.body.scores;
  
  // Loop through each exising friend to compare scores
  for (i = 0;i < friends.length; i++) {
    var scores = friends[i].scores;

    // Loop through each score for the friend in this position    
    for (j = 0; j < scores.length; j++) {
      // Compare the variance for each score compared to the new friend's score
      var comparison = Math.abs(scores[j] - newFriendScores[j]);
      comparisonArray.push(comparison);
    }
    
    // Sum each value in the comparison array and push the total to the comparisonArray
    var summed = eval(comparisonArray.join('+'));
    comparisonArray.push(summed);
  }
  
  // Loop through the comparisonArray and determine which value is the lowest, therefore best match
    console.log("comparisonArray: " + comparisonArray);
    var bestMatch = comparisonArray.indexOf(Math.min.apply(null, comparisonArray));
    console.log("bestMatch: " + bestMatch);   
       
    res.json(bestMatch); 
	});
}