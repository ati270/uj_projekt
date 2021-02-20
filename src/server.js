const express = require('express');

const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/testapp'));

//PATH LOCATION STARTEGY

app.get('/*', function(req,res){
  const fullPath = path.join(__dirname + '/dist/testapp/index.html');
  console.log(" Fetching from.." + fullPath);
    res.sendFile(fullPath);
})

let port = process.env.PORT = 7000;
app.listen(port);

console.log('Server started running..');


// Start the app by listening on the default Heroku port
