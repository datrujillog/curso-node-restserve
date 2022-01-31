require('dotenv').config();
require('colors');
const Server = require('./models/server');

// app.use(express.static('public'));

const server = new Server();

server.listen();









