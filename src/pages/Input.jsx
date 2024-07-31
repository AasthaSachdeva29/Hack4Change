// import React from "react";
// import { useState } from "react";

// const Input = () => {
//   const [farmerName,setfarmerName]=useState("");
//   const [contact,setContact]=useState("");
//     const collectData=async()=>{
//         console.warn(yourName,contact);
//         let result=await fetch("http://localhost:5600/register",{
//           method:'post',
//           body:JSON.stringify({yourName,contact}),
//           headers:{
//             "Content-Type":"application/json"
//           }
//         })
//         result=await result.json();
//         console.warn(result);
//     }
//   return (
//     <div>
      
//           <h1>Input page</h1>
    
//           <form style={{margin:"20px"}}>
//       <div class="form-group" style={{padding:"20px"}}>
//         <label for="exampleInputEmail1">Name</label>
//         <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" value={farmerName} onChange={(e)=>setfarmerName(e.target.value)}/>
//         <small id="emailHelp" class="form-text text-muted"></small>
//       </div>
//       <div class="form-group" style={{padding:"20px"}}>
//         <label for="exampleInputPassword1">Planting Date</label>
//         <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Land Area" value={plantingDate} onChange={(e)=>setplantingDate(e.target.value)}/>
//       </div>
//       <div class="form-group" style={{padding:"20px"}}>
//         <label for="exampleInputPassword1">Land Area (in Acre)</label>
//         <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Land Area" value={landArea} onChange={(e)=>setlandArea(e.target.value)}/>
//       </div>
//       <div class="form-group" style={{padding:"20px"}}>
//         <label for="exampleInputPassword1">Amount of seed (in kg)</label>
//         <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Land Area" value={amountSeed} onChange={(e)=>setamountSeed(e.target.value)}/>
//       </div>
//       <div class="form-group" style={{padding:"20px"}}>
//         <label for="exampleInputPassword1">Crop-name</label>
//         <input type="text" class="form-control" id="exampleInputPassword2" placeholder="Crop-name" value={cropName} onChange={(e)=>setcropName(e.target.value)}/>
//       </div>
//       <div class="form-group" style={{padding:"20px"}}>
//         <label for="exampleInputPassword1">Fertiliser Used</label>
//         <input type="text" class="form-control" id="exampleInputPassword3" placeholder="Fertiliser Used" value={fertiliser} onChange={(e)=>setfertiliser(e.target.value)}/>
//       </div>
//       <div class="form-group" style={{padding:"20px"}}>
//         <label for="exampleInputPassword1">Fertiliser Quantity (in kg)</label>
//         <input type="text" class="form-control" id="exampleInputPassword3" placeholder="Fertiliser Used" value={fertiliserQuantity} onChange={(e)=>setfertiliserQuantity(e.target.value)}/>
//       </div>
//       <div class="form-group" style={{padding:"20px"}}>
//         <label for="exampleInputPassword1">Planting Season (in kg)</label>
//         <input type="text" class="form-control" id="exampleInputPassword3" placeholder="Fertiliser Used" value={plantingSeason} onChange={(e)=>setplantingSeason(e.target.value)}/>
//       </div>
//       <button type="submit" class="btn btn-primary" onClick={collectData}>Submit</button>
//     </form>
        
//     </div>
//   );
// };

// export default Input;
