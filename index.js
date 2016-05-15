var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/sender', function(req, res){
  res.sendFile(__dirname + '/sender.html');
});

app.get('/receiver', function(req, res){
  res.sendFile(__dirname + '/receiver.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('send_reaction', function(msg){
    console.log('received send');
    socket.broadcast.emit('receive_reaction', msg);
  });
});

var port = process.env.PORT || 8000;
http.listen(port, function(){
  console.log('listening on *:' + port);
});
