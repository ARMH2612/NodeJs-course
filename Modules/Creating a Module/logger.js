const EventEmitter = require('events');

let url = "http://myLogger.com/log"

class Logger extends EventEmitter {
 log(message) {
    console.log(message);

    this.emit('messageLogged',{id:1, url:url})
}
}

module.exports = Logger


// this file was like this before the emmiter module was added:
// let url = "http://myLogger.com/log"
// function log(message) {
//     console.log(message);
// }

// module.exports = log




