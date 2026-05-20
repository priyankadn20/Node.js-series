const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('hello,im learning node js server');
    res.end();
});

server.listen(3000,()=>{
    console.log('server is running in : http://localhost:3000');
})


// Different routes handlleing

const defserver = http.createServer((req,res)=>{
   if(req.url == '/'){
    res.write('home page');
    res.end();
   }else if(req.url == '/about'){
    res.write('home page');
    res.end();
   }else{
    res.write('404 - page not found');
    res.end();
   }
});
defserver.listen(4000,()=>{
    console.log('server is running on : http://localhost:4000');
})


//http status code
const servermul = http.createServer((req, res) => {
    // Status code set kora
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK!');
});


//easy version of node js using express.js

const express = require('express');
const app = express();

app.use(express.json());

app.get('/about',(req,res)=>{
    res.send('about page')
})
app.get('/contact',(req,res)=>{
    res.send('contact page')
})
app.get('/user',(req,res)=>{
    res.json({name:'priyanka',city:'sylhet'})
});
app.use((req, res) => {
    res.status(404).send('Page not found!');
});

app.listen(2000, () => {
    console.log('Server: http://localhost:2000');
});