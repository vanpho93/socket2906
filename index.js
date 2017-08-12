const express = require('express');

const app = express();
const server = require('http').Server(app); //1
const io = require('socket.io')(server); //2

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

server.listen(3000, () => console.log('Server started!')); //3

io.on('connection', socket => {
    console.log(socket.id);
    // setInterval(() => socket.emit('SERVER_SEND_MESSAGE', Math.random()), 1000);
    socket.on('CLIENT_SEND_MESSAGE', message => console.log(message));
});
