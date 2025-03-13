const fs=require("fs");
const path=require("path");
const { json } = require("stream/consumers");

const filepath=path.join(__dirname,'../products.json');

const readProductsFromFile=()=>{
    const data=fs.readFileSync(filepath,"utf-8");
    return JSON.parse(data);
};

const writeProductsToFile=(products)=>{
    fs.writeFileSync(filepath,JSON.stringify(products,null,2));
};

module.exports={
    readProductsFromFile,
    writeProductsToFile
};