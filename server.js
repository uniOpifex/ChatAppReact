require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 3000 ;

const url = '192.168.0.31';

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/idea-board

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/public/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

io.listen(8000, () => {
  console.log("socket listening on Port 8000")
});


const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(bodyParser.json());
app.get('/', (req,res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

http.listen(PORT, function(){
  console.log(`listening on *:${PORT}`);
});

// app.listen(PORT, () => {
//   console.log("Magic happening on port " + PORT);
// })

