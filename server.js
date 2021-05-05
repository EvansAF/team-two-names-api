var express = require('express');
var app = express();
app.get('/', function (req, res) {
	
	
	 var groupMembers = ['Seyram', 'George', 'Fon', 'Evans' , 'Franklin' , 'Gabriel', 'Nbanjika'] ;
  res.send(groupMembers);
});









app.listen(process.env.PORT || 3000, () => {
  console.log("Server Has Started");
});
/*
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});*/