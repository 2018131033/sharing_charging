const express = require("express");
const fs = require('fs');

const app = express();

//app.use(express.static('public'));

app.get("/",function(req, res){
    res.send("Hello World!");
});

app.get("/posts",function(req, res){
    res.type("text").send("Visiting the posts route");
});

/*
fs.readFile('example.txt','utf8',function(err, data){
    if(err){
        handleError(err);
    }
    else{
        processData(data);
    }
});

fs.writeFile('example.txt','Sample Text',(err)=>{
    if(err){
        handleError(err);
    }
    else{
        console.log('File written!');
    }
});
*/


/*
let data = fs.readFile('example.txt','utf8');

data.then(processData).then(()=>{
    console.log('Done file reading');
}).catch(handleError);

let products = await fs.readFile('products.json','utf8');
let data2 = JSON.parse(products);
data2['type']='TV';
await fs.writeFile('products.json',JSON.stringify(data2));
*/



const PORT = 3000;
app.listen(PORT);
