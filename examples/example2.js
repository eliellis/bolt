var mesh = require('bolt').connect();

mesh.on('ping', function(){
  mesh.emit('pong');
});

setInterval(function(){},10000); //keep-alive
