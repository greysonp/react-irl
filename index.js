var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/sender', function(req, res){
  res.sendFile(__dirname + '/sender.html');
});

app.get('/receiver', function(req, res){
  res.sendFile(__dirname + '/receiver.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('send_reaction', function(msg){
    console.log('received send_reaction');
    socket.broadcast.emit('receive_reaction', msg);
  });

  socket.on('image_loaded', function(msg){
    console.log('received image_loaded');
    socket.broadcast.emit('image_loaded', msg);
  });
});

var port = process.env.PORT || 8000;
http.listen(port, function(){
  console.log('listening on *:' + port);
});
