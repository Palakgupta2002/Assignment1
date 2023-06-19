async function fetchdata(){
    try {
        const response= await fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
       if(!response.ok){
         throw new Error("Network response is not responding");
       }
       else{
       const  data= await response.json();
      productpage(data);
    }


    }
    catch(err){
        console.log("error occurs");
    }
}
fetchdata();
function productpage(data){
    data.map((element)=>{
        const product=document.createElement('div');
        const desc=document.createElement("div");
        const image=document.createElement('img');
        const addcart=document.createElement("button");
        addcart.innerText="Add to Cart";
        addcart.style.padding="7px";
        addcart.style.borderRadius="10px";
        addcart.style.marginTop="10px";
        addcart.style.backgroundColor="rgb(4, 50, 52)";
        addcart.style.color="white";
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
        desc.append(color,gender,name,price,addcart);
        desc.style.color="rgb(4, 50, 52)";
        desc.style.fontWeight="bold";
        product.append(image);
        const cart=document.createElement("div");
        cart.setAttribute("id","cart");
        const mineproduct= document.getElementById("productcart");
        cart.append(image,desc);
        cart.style.border="2px solid rgb(4, 50, 52)";
        cart.style.borderRadius="5px";
        cart.style.columnGap="10px";
        cart.style.padding="10px";
        mineproduct.append(cart);
        
        // localStorage.setItem("product",JSON.stringify(element));
    
      
    })
   
}
