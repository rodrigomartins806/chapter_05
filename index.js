var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);
var SerialPort = require('serialport');
var readline = require('@serialport/parser-readline');
//Verificar a porta que o Arduino esta conectado e alterar aqui
var port = new SerialPort('COM9');
var serialport = port.pipe(new readline('\r\n'));

app.set('view engine', 'ejs');    // Setamos que nossa engine será o ejs

app.use(express.static(__dirname+'/public'));
 
app.get('/',function(req,res){
    res.render('index');
});

serialport.on('open',function(){
    console.log('Serial port opened');
});

io.on('connection',function(socket){
    console.log('socket.io connection');
    serialport.on('data',function(data){
        data=data.trim();
        socket.emit('data',data);
    });


socket.on('disconnect',function(){
    console.log('disconected');
});

});

server.listen(3000, function(){
    console.log('listening on port 3000...');
});
