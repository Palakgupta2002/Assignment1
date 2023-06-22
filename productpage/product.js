let data;
async function fetchdata(){
    try {
        const response= await fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
       if(!response.ok){
         throw new Error("Network response is not responding");
       }
       else{
        data= await response.json();
      // productpage(data);
      filterproduct(data);
      
    }


    }
    catch(err){
        console.log("error occurs");
    }
}
let cartarray=JSON.parse(localStorage.getItem("cart"))||[];
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
        // addcart.style.cursor="pointer";
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
        addcart.addEventListener("click",()=>{
            alert("Product Added Successfully ");
            cartarray.push(element);
            localStorage.setItem("cart",JSON.stringify(cartarray));
            console.log(cartarray);
        })

        cart.style.border="2px solid rgb(4, 50, 52)";
        cart.style.borderRadius="5px";
        cart.style.columnGap="10px";
        cart.style.padding="10px";
        mineproduct.append(cart);
            })

   
}
var rangeInput = document.getElementById('customRange1');
var leftLabel = document.getElementById('leftLabel');
var rightLabel = document.getElementById('rightLabel');

rangeInput.addEventListener('input', function() {
  var value = this.value;

  // Update the left and right labels based on the slider value
  
  rightLabel.textContent = 'Rs ' +  value;
  if(this.value==0){
   rightLabel.textContent="Rs "+500;
  }
});
const searchInput = document.getElementById('searchcolor');

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value;
  // console.log(searchValue);
});


  


// });

function filterproduct(data) {

    
  document.getElementById('submit').addEventListener('click', function() {

    const result = document.getElementById('searchcolor').value;
  
      const filteredData = data.filter((ele) => {
        
        if (ele.color === result) {
       
          return true; 
        }
        productpage(data);
       
  
       
      });
      clearProductCart();
      productpage(filteredData);
     
     
      
      
    });
    //This is for men
   document.getElementById("menclick").addEventListener("click",()=>{
    let filtermen=document.getElementById("menclick").checked;
    if(filtermen){
     let filteredData= data.filter((ele)=>{
      if(ele.gender==="Men"){
        return ele;
      }
     })
     clearProductCart();
     productpage(filteredData);
    //  console.log(filteredData);

    }
    
   })
   //This is for women
   document.getElementById("womenclick").addEventListener("click",()=>{
    let filtermen=document.getElementById("womenclick").checked;
    if(filtermen){
     let filteredData= data.filter((ele)=>{
      if(ele.gender==="Women"){
        return ele;
      }
     })
     //This is for all 
     document.getElementById("all").addEventListener("click",()=>{
      document.getElementById("all").checked;
    
       clearProductCart();
       productpage(data); 
     })
     

     clearProductCart();
     productpage(filteredData);
    //  console.log(filteredData);

    }
    
   })
   var rangeInput = document.getElementById('customRange1');

rangeInput.addEventListener('input', function() {
  const filteredData = data.filter((ele) => {
    if (ele.price <= rangeInput.value) {
      return true;
    }
    return false;
  });

  clearProductCart(); // Clear existing content
  productpage(filteredData);
});

  
   clearProductCart();
   productpage(data); 
 
}
function clearProductCart() {
  const mineproduct = document.getElementById("productcart");
  mineproduct.innerHTML = "";
}
document.getElementById("reset").addEventListener("click",function reset(){
  productpage(data);
})


