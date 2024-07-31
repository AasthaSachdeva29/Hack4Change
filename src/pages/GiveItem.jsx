import React,{ useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function GiveItem() {
  const [yourName,setyourName]=useState("");
  const [productName,setproductName]=useState("");
  const [actualPrice,setactualPrice]=useState("");
  const [sellingPrice,setsellingPrice]=useState("");
  const [brand,setbrand]=useState("");
  const location=useLocation();
  const navigate=useNavigate();

    const {item}=location.state || {};
    useEffect(()=>{
      setproductName(item.name)
   },[])

   const handleOnSub=()=>{
     navigate('/Marketplace',{state: {yourName,productName,actualPrice,sellingPrice,brand,item}});
    //  navigate("/MarketItem",{ state: { item } });
   }
  return (
    <div>
      <div >
      <center>
        <img src={item.image}/>
        </center>
      </div>
      <div>
        <p>Your Name</p>
        <input type="text" placeholder='Please Enter details' value={yourName} onChange={(e)=>setyourName(e.target.value)}/>
        <h2 style={{marginTop:"20px",marginBottom:"20px"}}>Product Details</h2>
        <p>Product Name</p>
        <input type="text" placeholder='Please Enter details' value={productName}/>
        <p>Actual Price</p>
        <input type="text" placeholder='Please Enter details' value={actualPrice} onChange={(e)=>setactualPrice(e.target.value)}/>
        <p>Selling Price</p>
        <input type="text" placeholder='Please Enter details' value={sellingPrice} onChange={(e)=>setsellingPrice(e.target.value)}/>
        <p>Brand</p>
        <input type="text" placeholder='Please Enter details' value={brand} onChange={(e)=>setbrand(e.target.value)}/>

        
      </div>

      <button onClick={handleOnSub}  style={{backgroundColor:"rgb(34,139,34)", width:"70px",marginTop:"60px",marginLeft:"13px",border:"1px solid white",borderRadius:"5px",color:"white",width:"100%",padding:"6px" }}>Submit</button>


    </div>
  )
}

