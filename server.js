var http = require('https');
var path = require('path');

var socketio = require('socket.io');
var express = require('express');

var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'public')));

var clients = [];

io.on('connection', function (socket) {
  console.log("ID: "+socket.id.substring(2)+"has connected");
  clients[socket.id] = {
    vote:''
  };

  io.sockets.emit('count', socket.client.conn.server.clientsCount);

  socket.on('vote', function(data){
    clients[socket.id].vote = data; // good or bad
    var result = calcVote(clients);
    io.sockets.emit('vote', result);
  });

  socket.on('disconnect', function() {
    delete clients[socket.id];
    io.sockets.emit('count', socket.client.conn.server.clientsCount);
  });


});

var calcVote = function(calcclients){
  var sums = {
    good:0,
    bad:0
  };
  calcclients.forEach(function(client){
    switch (client.vote) {
      case 'good' :
      sums.good += 1;
      break;
      case 'bad' :
      sums.bad += 1;
      break;
    }
  });
  return sums;
};

server.listen(process.env.PORT || 3010, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
