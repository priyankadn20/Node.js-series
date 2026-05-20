
const fs = require('fs').promises;

fs.writeFile('result.txt','im priyanka',(err)=>{
    if(err){
        console.log('err');
        return;
    }
    console.log('file saved')
});
fs.writeFile('myFile','im priyanka debnath',(err)=>{
    if(err){
        console.log('err');
        return;
    }
    console.log('file saved')
});

fs.readFile('hello.txt','utf8',(err,data)=>{
    if(err){
        console.log('saved');
        return;
    }
    
    console.log('data:',data);
})


fs.readFile('myFile.txt','utf8')
.then((data)=>{
        console.log('File content:', data);
        const newData = data + '\nWritten by: Preyanka';
        return fs.writeFile('result.txt', newData);
})
.then(()=>{
    console.log('result.txt saved!');
})
.catch((err)=>{
    console.log('file doesnt exist',err.message);
})


//async function
async function myAsynFunc(){
    try{
         const data = await fs.readFile('result.txt','utf8');
         console.log(data);
        await fs.appendFile('result.txt','\nTask 4 complete');
        console.log('Appended!');

    }catch(err){
        console.log('error',err.message)
    }
}
