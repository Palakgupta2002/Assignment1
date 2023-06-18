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
        const image=document.createElement('img');
       console.log(element);
    })
   
}
