import http from 'node:http';
//cons http =require('node:http);
const hostname='127.0.0.1';//localhost
const port=3300;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/html; charset=utf-8")

    res.end("CREACION DE SERVIDOR!​​🎈​​​");
});
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})