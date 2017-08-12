const io = require('socket.io-client');
const $ = require('jquery');

$('#btnSend').click(() => {
    const message = $('#txtMessage').val();
    socket.emit('CLIENT_SEND_MESSAGE', message);
});

const socket = io();
socket.on('SERVER_SEND_MESSAGE', data => console.log(data));
