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
        image.style.width="200px";
        const color=document.createElement("p");
        const gender=document.createElement("p");
        const name=document.createElement("p");
        const price=document.createElement("p");
        image.src=element.imageURL;
        color.innerText=element.color;
        gender.innerText=element.gender;
        name.innerText=element.name;
        price.innerText=element.price;
        desc.append(color,gender,name,price);
        product.append(image);
        const cart=document.createElement("div");
         const mineproduct= document.getElementById("productcart");
         cart.append(image,desc);
         cart.style.border="2px solid rgb(4, 50, 52)";
         cart.style.borderRadius="5px";
         cart.style
         mineproduct.append(cart);
        
        // localStorage.setItem("product",JSON.stringify(element));
    
      
    })
   
}
