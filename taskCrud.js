//task:1
const http = require('http');

const adress = [{
    name:"priyanka",
    city:"sylhet"
}];


const app = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('welcome to my server');
    }else if(req.url === '/about'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Name: Preyanka, City: Sylhet');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found!');
    }
})

app.listen(4000,()=>console.log('server:http://localhost:4000'));