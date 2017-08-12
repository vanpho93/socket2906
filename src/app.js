const io = require('socket.io-client');
const $ = require('jquery');

$('#btnSend').click(function(){
    const message = $('#txtMessage').val();
    socket.emit('CLIENT_SEND_MESSAGE', message);
});

const socket = io();
socket.on('SERVER_SEND_MESSAGE', function(data) { $('#ulMessage').append('<li>' + data + '</li>'); });
