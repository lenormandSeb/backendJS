const app = require('./app.ts').set('port', 1337)

require("http").createServer(app)
    .listen(app.get('port'), () => {
        console.log(`Listen on port ${app.get('port')}`)
    })
