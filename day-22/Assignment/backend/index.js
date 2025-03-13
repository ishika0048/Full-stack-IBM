const fileHandler=require("./utils/fileHandeler");
const express=require("express");
const fs=require("fs");
const path=require("path");
const os=require("os");
const crypto=require("crypto");
const logRequest=require("./logger");
const productsData=require("./data");
const {readProductsFromFile,writeProductsToFile}=require("./utils/fileHandeler");

const app=express();
const PORT=3000;

app.use(express.json());
app.use(logRequest);

console.log(`Hostname:${Os.hostname() }`);
console.log(`OS type:${os.type()}`);
console.log(`Total Memory:${os.totalmem()}`);

app.get("/products",(req,res)=>{
    const products=readProductsFromFile();
    res.json(products);
});

app.get("/products/:id",(req,res)=>{
    const products=readProductsFromFile();
    const product=products.find(p=>p.id===req.params.id);
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }
    res.json(product);
});

app.post("/products",(req,res)=>{
    const {name,price,category}=req.body;
    if(!name || !price || !category){
        return res.status(400).json({message:"All filds are required"});
    }

    const newProduct={
        id:crypto.randomUUID(),
        name,
        price,
        category,
    };

    const products=readProductsFromFile();
    products.push(newProduct);
    writeProductsToFile(products);

    res.status(201).json(newProduct);
});

app.put("/products/:id",(req,res)=>{
    const {id}=req.params;
    const{name,price,category}=req.body;

    const products=readProductsFromFile();
    const productIndex=products.findIndex(p=>p.id===id);

    if(productIndex===-1){
        return res.status(404).json({message:"Products not found"});
    }

    products[productIndex]={...products[productIndex],name,price,category};
    writeProductsToFile(products);

    res.json(products[productIndex]);
});

app.delete("/products/:id",(req,res)=>{
    const{id}=req.params;

    const products=readProductsFromFile();
    const updateProducts=products.filter(p=>p.id!==id);

    if(updateProducts.length===products.length){
        return res.status(404).json({message:"Product not found"});
    }

    writeProductsToFile(updateProducts);
    res.json({message:"Product deleted succesfully"});
});

app.use((req,res)=>{
    res.status(404).json({message:"Route not found"});
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});