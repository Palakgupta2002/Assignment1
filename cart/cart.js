let arr=JSON.parse(localStorage.getItem("cart"));
console.log(arr);
function cartpage(){
    arr&&arr.map((ele)=>{
       console.log(ele);
        
    })
}
cartpage();