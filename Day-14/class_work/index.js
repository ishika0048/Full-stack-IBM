function showdata(array){

}

    array.forEach(el => {
        
    let box = document.createElement('div');
    box.classname="parentbox";
    box.style.border="1px solid gray"
    box.style.width="3oopx"

    let h2 = document.createElement('h2');
    h2.innerText="el.name"

    let p1 = document.createElement('p');
    p1.innerText="el.catagory";

    let p2 = document.createElement('p');
    p2.innerText="el.price";

    letp3 = document.createElement('p')
    p3.innerText="el.rating";

    letimg = document.createElement('img');
    Image.src =el.img;;
    img.style.height="100%";
    img.style.width="100%";

    let button = document.createElement('button');
    button.innerText="Add to Cart";

    
    box.append(h2,img,p1,p2,p3,button);

    box.append(h2,img,p1,p2,p3,button);

    document.getElementById("product").append(box)

    });
    showData(data)
    let arr = JSON.parse(localStorage.getItem("Datacart")) || [];

    
    function addTOcart(el,index){

        for(let i = 0;i<arr;i++){
            if(arr[i].id == el.id){
                return alert("data already exists");
        
            }
        }
        arr.push(el)

localStorage.setItem("Datacart",JSON.stringinfy(arr));
alert("data added to cart");
}

function showcart(){

}