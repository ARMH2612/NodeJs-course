

const Logger = require('../Creating a Module/logger')
const logger = new Logger();

//register a listener:
logger.on('messageLogged',(arg)=>{// e, eventRg ...call it what you want
    console.log('Listener called', arg);
})
logger.log('message')
