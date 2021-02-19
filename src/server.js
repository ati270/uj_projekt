const express = require('express');

const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/investment-gui'));

//PATH LOCATION STARTEGY

app.get('/*', function(req,res){
  const fullPath = path.join(__dirname + '/dist/investment-gui/index.html');
  console.log(" Fetching from.." + fullPath);
    res.sendFile(fullPath);
})

app.listen(process.env.PORT || 7000);

console.log('Server started running..');


// Start the app by listening on the default Heroku port
