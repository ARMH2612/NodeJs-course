const EventEmitter = require('events');
// Capital letters here means a convesion for classes, ie:EventEmitter is  class
// To use this class:
// 1- create an instance of EventEmitter:
const emitter = new EventEmitter();

//register a listener:
emitter.on('messageLogged',(arg)=>{// e, eventRg ...call it what you want
    console.log('Listener called', arg);
})

//Raise an event:
// rasing a simple event with no argument => emitter.emit('messageLogged')
//emit means: Making a noise, produce something -> signaling that an event has happend

//Note: The order is important here; we have to register a listener before we raise its event.

// rasing a simple event with argument:
// => emitter.emit('messageLogged',1,'url')
// but if we're sending multiple arguments, it's better to encapsulate them in an object:
emitter.emit('messageLogged',{id:1, url:'http://...'})
// the call back function of the listener recieves the event argument sent by the raise of the event