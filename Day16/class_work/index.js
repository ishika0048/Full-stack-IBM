// //Asynchronous behaviour

// //setTimeout,setInterval,

// //microtask,macrotask 

// let name ="synchronous code";

// console. log(name);

// let surName = "code";

// console.log(surName);

// setTimeout(()=>{
//     console.log('settimeout task,Macrotask-1')
// },  2000)


// setTimeout(()=>{
//     console.log('settimeout task,Macrotask-2') 
// },  1000)

// let myPromise = new Promise((resolve,reject)=>{
//     let flag = true;
//     if(flag){
//         resolve('Promise resolved');
//     }else{
//         reject('Promise rejected');
//     }
// })





// setTimeout(()=>{
//     console.log('settimeout task,Macrotask-3')
// },  500)

// queueMicrotask(()=>console.log('QueueMicrotaskk,macrotask-1'));

// console.log("Name,surName");

// async function fetchData(){
//     try{
//         let data =await fetch("https://fakestoreapi.com/products ");

    
//         let ans =  await data.jsobn();

//         console.log(ans);
//    }catch (eroor){
//         console.log(eroor);
//    }

// }


// fetchData();

async function fatchData(){
    try{
        let data=await fetch("https://fakestoreapi.com/products ");

        let ans=await data.json();
        console.log(ans);
    }catch(error){
        console.log(error);
    }
}
fatchData()

