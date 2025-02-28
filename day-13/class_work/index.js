//Foreach

let arr=[1,2,3,4,5,6,7,"Ishika",8,9,10,11,12,"Guria",13,14,15,16]

// arr.forEach((el, index)=>{
//     console.log(el,index)
// })

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i],i);
// }


//map

// let output=arr.map((el,index)=>{
//     return el**2;
// });
// console.log(output)


//filter

let output = arr.filter((el,index)=>{
    return typeof el!=="string" && el%2==0;
}).map((el,index)=>{
    return el**2;
})
console.log(output)

//Reduce

let output2=arr.reduce((el,acc)=>{
    return el+acc;
    
},0)
console.log(output2)


let data = [
     {name:"watch",price:2000,rating:2},
     {name:"phone",price:1300,rating:2},
     {name:"shoe",price:1500,rating:2},
     {name:"car",price:1600,rating:2},
     {name:"earphone",price:1800,rating:2}
] 
let ans=data.sort((a,b)=>{
    if(a.name>b.name){
        return-1;
    }{
    if(a.name>b.name) {
        return -1;  
    }
    return 0
    }
})
console.log(ans)





let