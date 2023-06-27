let arr=JSON.parse(localStorage.getItem("cart"));
console.log(arr);

function cartpage(){
    var sum=0;
    arr&&arr.map((element)=>{
      
        const product=document.createElement('div');
        const desc=document.createElement("div");
        const image=document.createElement('img');
        const details=document.createElement("div");
        const details1=document.createElement("div");
        const detailsp=document.createElement("p");
        var quantity=1;
        const quantityp=document.createElement("p");
        const quantitybtn=document.createElement("button");
        quantitybtn.innerText="Click";
        if(element.quantity>=quantity){
        quantitybtn.addEventListener("click",()=>{
        
                quantity++;
            console.log(quantity);
            
           
        })}
        else{
            alert("Currently we have not more");

        }
        quantityp.innerHTML=quantity;
       
        detailsp.innerText="Product Details"
        details1.append(detailsp,quantityp,quantitybtn);
        details1.setAttribute("id","details1");
        image.style.width="200px";
        const color=document.createElement("p");
        const gender=document.createElement("p");
        const name=document.createElement("p");
        const price=document.createElement("p");
        image.src=element.imageURL;
        color.innerText="Color: "+element.color;
        gender.innerText="Gender: "+element.gender;
        name.innerText="Name: "+element.name;
        price.innerText="Price: "+element.price;
        sum+=element.price;
        desc.append(color,gender,name,price);
        desc.style.color="rgb(4, 50, 52)";
        desc.style.fontWeight="bold";
        product.append(image);
        const cart=document.createElement("div");
        cart.setAttribute("id","cart");
        const mineproduct= document.getElementById("cartpage");
        cart.append(image,desc);
        details.append(cart,details1);
        details.style.display="flex";
        cart.style.border="2px solid rgb(4, 50, 52)";
        cart.style.borderRadius="5px";
        cart.style.columnGap="10px";
        cart.style.padding="10px";
        cart.style.boxShadow = " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
        mineproduct.append(details);
       
       
    })
    console.log(sum);
}

cartpage();