const MyName = 'preyanka';
const MyAge =23;
const Language="my favourite language is node js";

console.log(MyName,MyAge,Language);


const os = require('os');

console.log(os.platform());
console.log(os.arch());  
console.log(os.homedir());  
console.log(os.hostname()); 
console.log(os.freemem());
console.log(os.totalmem()); 

const path = require('path');

const myPath = 'E:/practice node-js/app.js';

console.log(path.basename(myPath));

const math = require('./math.js');

console.log(math.add(10,10));
const myageDiv = math.div(23,7);
console.log(math.mul(myageDiv,3))

const myInfo = require('./profile.js')
console.log(myInfo.name)



//synchronous way write file:
const fs = require('fs');
const { resolve } = require('dns');
const { rejects } = require('assert');
fs.writeFileSync('hello1.txt','i want to learn js')
console.log('faved file')

//Asynchronous way write file:
fs.writeFile('hello2.txt','hello,im preyanka debnath',(err)=>{
    if(err){
        console.log('err:',err);
    }
    console.log('File saved')

});
console.log('This is the Asyncronious');

//synchronous way read file:
const data = fs.readFileSync('hello1.txt','utf8');
console.log(data);

//Asynchronous way read file:
fs.readFile('hello1.txt','utf8',(err,data)=>{
    if(err){
        console.log('err:',err);
        return;
    }
    console.log(data);
});


//append data

fs.appendFile('hello.txt','i want to learn node.js',(err)=>{
    if(err) throw err;
    console.log('Data added');
})

//rename file name

fs.rename('hello1.txt','demofile.txt',(err)=>{
    if(err) throw err;
    console.log('file renamed')
})

//delete file
fs.unlink('hello2.txt',(err)=>{
    if(err) throw err;
    console.log('File deleted')
});

//check file is exist or not

if(fs.existsSync('hello.txt')){
    console.log('file is exist')
}else{
    console.log('doesnt exist');
}

//make folder directory

fs.mkdir('myFolder',(err)=>{
     if (err) throw err;
    console.log('Folder created!');
})

//nested folder
fs.mkdir('myFolder/subFolder/deepFolder', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Nested folders created!');
});

// Callback
fs.readFile('hello.txt', 'utf8', (err, data) => {
    console.log(data);
});

//nested callback---its creates pyramid of doom
fs.readFile('hello.txt', 'utf8', (err, data) => {
    fs.readFile('hello1.txt', 'utf8', (err, data1) => {
    fs.readFile('hello2.txt', 'utf8', (err, data2) => {
    console.log('Done');
});
});
});

// Promise

const myPromise = new promiseHooks((resolve, reject)=>{
    const success = true;
    if(success){
        resolve('complete');
    }else{
        reject('error')
    }
});

myPromise
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })

  //fs module ke Promise e convert kora:
  const fs = require('fs').promises; 

 fs.readFile('hello.txt', 'utf8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log('Error:', err);
    });

    //Async/Await---its like sugar coating on promise

    async function myFile() {
        const DT = await fs.readFile('hello.txt','utf8');
        console.log(data);
        
    }

    //Error handle —use try/catch:

    async function myFile1(){
        try{
            const Dt = await fs.readFile('hello.txt','utf8');
        console.log(data);
        } catch(err){
            console.log(err.message)
        }
    }
    myFile1();