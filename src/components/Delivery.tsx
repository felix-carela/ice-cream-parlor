import React from "react";
import "../styles/Delivery.css";
import "../App.css";
import image from "../images/delivery1.png";


function Delivery() {
  return <div className="Delivery">
    <div className="delivery-container">
      <div className="delivery-box">
        <div className="del-1" >
            <img src="/images/ice-cream-pint-packs.png" alt="Ice Cream Pint Pack" className="ice-cream-image1"></img>
            <h3 className="custom-heading"><strong>ICE CREAM PINT PACKS</strong></h3>
            <p className="ice-cream-description">Order pints of our famous small batch ice cream online </p>
        </div>
        <div className="del-2">
          <img src="/images/ice-cream-nationwide.png" alt="Ice Cream Pint Pack" className="ice-cream-image1" ></img>      
          <h3 className="custom-heading"><strong>NATIONWIDE DELIVERY</strong></h3>
          <p className="ice-cream-description">Order pints of our famous small batch ice cream shipped anywhere </p>
        </div>
        <div className="del-3">
          <img src="/images/ice-cream-local.png" alt="Ice Cream Pint Pack" className="ice-cream-image1"></img>
          <h3 className="custom-heading1"><strong>LOCAL PICK UP</strong></h3>
          <p className="ice-cream-description">Order pints of our famous small batch ice cream  pick up locally </p>
        </div>
      </div>
      <br />
      <br />
      <div className="about-M">
        <p className="about-Morgenstern">
            <strong>Morgenstern’s Finest Ice Cream, NYC</strong><br />
            Morgenstern’s is a contemporary ice cream parlor serving small batch ice cream. Pick up at our Greenwich Village Flagship or place an order for Nationwide Shipping.
         </p>
      </div>
    </div>
  </div>;
  

}

export default Delivery;