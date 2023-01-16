/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/Oil.png";

import img3 from "../Assets/Vitamin C.png";
import img4 from "../Assets/618-39BSrgL._SL1500_.png";
import img5 from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";


import Oil from "../Assets/Oil.png";
import Hair from "../Assets/New 10.png";
import some from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import clock from "../Assets/clock.png";
import Apple from "../Assets/Apple Watch Series 7 (GPS, 45mm) Midnight.png";
import adi from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";
import gel from "../Assets/618-39BSrgL._SL1500_.png";
const MyOrder = () => {
  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
        <h1>MY ORDERS</h1>
      </div>

      <div className="MyOrderFour">
        <h3>All Orders</h3>
        <h3>InTransit</h3>
        <h3>Canceled</h3>
        <h3 className="special">Buy it Again</h3>
      </div>

      <div className="MyOrderPlaced">
        <h2>
          {" "}
          <span style={{ fontWeight: "700" }}>18 orders </span> placed in{" "}
        </h2>
        <select>
          <option>Last 30 days</option>
        </select>
      </div>

      <hr className="MyOrderHr" />

      <div className="MyOrderTwoSec">
        <div className="left">
          <input type={"checkbox"} />
          <img src={img2} alt="" />
          <div className="desc">
            <h2>SOLGAR</h2>
            <p>
              Solgar B-Complex "100", 100 Vegetable Capsules
              <br />
              Non GMO, Vegan, Gluten Free, Dairy Free,
              <br />
              Kosher, Halal - 100 Servings.
            </p>
            <h6>₹1,965.00</h6>
            <span>[ ALL TAXES & IMPORT DUTY INCLUDED ]</span>
          </div>
          <div className="return">
            <h3>Why are you returning this?</h3>
            <select>
              <option>Last 30 days</option>
            </select>
          </div>
        </div>

        <div className="right">
          <button>CONTINUE</button>
          <hr style={{ width: "80%", marginLeft: "10%" }} />

          <div>
            <img src={img3} alt="" className="MyOrder-img" />
            <img src={img4} alt="" className="MyOrder-img" />
            <img src={img5} alt="" className="MyOrder-img" />
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "55%",
          marginLeft: "10%",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      />
      <div className="MyOrderTwoSec">
        <div className="left">
          <input type={"checkbox"} />
          <img src={img4} alt="" />
          <div className="desc">
            <h2>SOLGAR</h2>
            <p>
              Solgar B-Complex "100", 100 Vegetable Capsules
              <br />
              Non GMO, Vegan, Gluten Free, Dairy Free,
              <br />
              Kosher, Halal - 100 Servings.
            </p>
            <h6>₹1,965.00</h6>
            <span>[ ALL TAXES & IMPORT DUTY INCLUDED ]</span>
          </div>
          <div className="return">
            <h3>Why are you returning this?</h3>
            <select>
              <option>Last 30 days</option>
            </select>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "55%",
          marginLeft: "10%",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      />
      <div className="MyOrderTwoSec">
        <div className="left">
          <input type={"checkbox"} />
          <img src={img2} alt=""  />
          <div className="desc">
            <h2>SOLGAR</h2>
            <p>
              Solgar B-Complex "100", 100 Vegetable Capsules
              <br />
              Non GMO, Vegan, Gluten Free, Dairy Free,
              <br />
              Kosher, Halal - 100 Servings.
            </p>
            <h6>₹1,965.00</h6>
            <span>[ ALL TAXES & IMPORT DUTY INCLUDED ]</span>
          </div>
          <div className="return">
            <h3>Why are you returning this?</h3>
            <select>
              <option>Last 30 days</option>
            </select>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "55%",
          marginLeft: "10%",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      />
      <div className="MyOrderTwoSec">
        <div className="left">
          <input type={"checkbox"} />
          <img src={img5} alt="" />
          <div className="desc">
            <h2>SOLGAR</h2>
            <p>
              Solgar B-Complex "100", 100 Vegetable Capsules
              <br />
              Non GMO, Vegan, Gluten Free, Dairy Free,
              <br />
              Kosher, Halal - 100 Servings.
            </p>
            <h6>₹1,965.00</h6>
            <span>[ ALL TAXES & IMPORT DUTY INCLUDED ]</span>
          </div>
          <div className="return">
            <h3>Why are you returning this?</h3>
            <select>
              <option>Last 30 days</option>
            </select>
          </div>
        </div>
      </div>


      <h1 style={{ textAlign: "center", fontFamily: "Monument"  , marginTop : '15%'}}>
        RECENTLY VIEWED
      </h1>

      <div className="many">
        <div>
          <img src={Hair} alt="" />
        </div>
        <div>
          <img src={some} alt="" />
        </div>
        <div>
          <img src={Apple} alt="" id="app" />
        </div>
        <div>
          <img src={clock} alt="" id="clock" />
        </div>
        <div>
          <img src={Oil} alt="" />
        </div>
        <div>
          <img src={adi} alt="" />
        </div>
        <div>
          <img src={gel} alt="" />
        </div>
      </div>

    </>
  );
};

export default MyOrder;
