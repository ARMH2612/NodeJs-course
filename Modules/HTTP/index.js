const http = require('http');

//seerver is an event emiiter=> has all the capabilities we saw earlier
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello world')
        res.end()
    }
    if(req.url === '/api/course'){
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }
})
// Register a listener
// server.on('connection',(socket)=>{
//     console.log('New connection');
// })

// raise an event
server.listen(3000)
console.log("listening on port 3000...");