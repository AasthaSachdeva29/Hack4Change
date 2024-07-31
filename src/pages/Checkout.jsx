// // src/Checkout.js
// import React from 'react';
// import '../App.css';

// const Checkout = () => {
//   return (
//     <div className="checkout-container">
//       <header className="checkout-header">
//         <button className="back-button">←</button>
//         <h1 style={{justifyContent:"start"}}>Checkout</h1>
//       </header>
//       <div className="delivery-info">
//         <p><strong>Expected delivery by</strong></p>
//         <p>23/4 23/4 Kariyammana Agrahara Road 23/4 Kariyammana Agrahara Road Bellandur</p>
//       </div>
//       <div className="item-info">
//         <p><strong>Tea Leaf Plucking</strong></p>
//         <p>From: 2024-08-30</p>
//         <p>To: 2024-08-31</p>
//         <p>Land: undefined acres</p>
//         <p>Cancellation policy</p>
//         <button className="add-more-items">Add More Items</button>
//         <div className="quantity-selector">
//           <button className="quantity-button">-</button>
//           <input type="text" value="1" readOnly className="quantity-input" />
//           <button className="quantity-button">+</button>
//         </div>
//       </div>
//       <div className="billing-info">
//         <h2>Billing Information</h2>
//         <div className="billing-row">
//           <p>Item Total</p>
//           <p>₹100.00</p>
//         </div>
//         <div className="billing-row">
//           <p>Total Amount</p>
//           <p>₹100.00</p>
//         </div>
//       </div>
//       <div className="trouble-info">
//         <p><strong>Trouble in placing order?</strong></p>
//       </div>
//       <footer className="checkout-footer">
//         <button className="pay-button">Pay ₹100.00</button>
//       </footer>
//     </div>
//   );
// };

// export default Checkout;


import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Checkout() {
  const location=useLocation();
  const {item}=location.state || {};
  const navigate=useNavigate();
  const clickToPrev=()=>{
    navigate('/marketplace');
  }
  return (
    <div>
        <div style={{display:'flex'}}>
        <h3 style={{fontWeight:"bold",cursor:"pointer"}} onClick={clickToPrev}>←</h3>
        <h3 style={{fontWeight:"bold",marginLeft:"10px"}}>Checkout</h3>
        </div>
        <div>
        <h5 style={{fontWeight:"bold",marginTop:"20px"}}>Expected delivery by</h5>
        <p style={{color:"gray",top:"-10px"}}>soon</p>
        </div>
        <div>
        <div style={{border:"1px solid white",borderRadius:"5px",boxShadow: "10px 5px 5px #aaaaaa"}}>
            <div style={{display:"flex"}}>
            <p style={{fontWeight:"bold"}}>{item.name}</p>
            <p style={{justifyContent:"end", marginLeft:"80%",fontWeight:"bold"}}>{item.price}</p>

            </div>
            <p style={{color:"gray",fontSize:"10px"}}>Cancellation policy</p>
            <hr style={{color:"grey"}}/>
            <div style={{paddingBottom:"12px" ,color:"rgb(21, 120, 21)"}}>
                Add more items
            </div>
            </div>
            <div style={{marginTop:"30px", border:"1px solid white",borderRadius:"5px",boxShadow: "10px 5px 5px #aaaaaa"}}>
            <div>
            
              <p style={{fontWeight:"bold"}}>Billing Information</p>
              
              </div>
              <div style={{display:"flex"}}>
              <p>Item Total</p>
              <p style={{fontWeight:"bold",justifyContent:"end", marginLeft:"79%"}}>{item.price}</p>
              </div>
              <hr style={{color:"grey"}}/>
              <div style={{display:"flex"}}>
                <p style={{fontWeight:"bold"}}>Total Amount</p>
                <p style={{fontWeight:"bold",justifyContent:"end", marginLeft:"77.5%"}}>{item.price}</p>
              </div>
            
            </div>
            <div style={{marginTop:"30px",border:"1px solid white",borderRadius:"5px",boxShadow: "10px 5px 5px #aaaaaa",display:"flex"}}>
              <p style={{fontWeight:"bold"}}>Trouble in placing order?</p>
              <p style={{fontWeight:"bold",justifyContent:"end", marginLeft:"72%",color:"rgb(21, 120, 21)"}}>Contact Us</p>
            </div>

        </div>
        
        <center>
        <button style={{backgroundColor:"rgb(34,139,34)", width:"70px",marginTop:"60px",marginLeft:"13px",border:"1px solid white",borderRadius:"5px",color:"white",width:"100%",padding:"6px" }}>Pay ₹100.00</button>
        </center>
       
    </div>
  );
}

export default Checkout;
