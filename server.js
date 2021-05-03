const http = require("http");
const app = require('./app');

app.set('port', 1337)

const serv = http.createServer(app);

serv.listen(1337);