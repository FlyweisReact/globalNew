/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";

const Profile = () => {
  return (
    <>
      <div className="MyOrderHead" style={{ marginTop: "2%" }}>
        <img src={img1} alt="" />
      </div>

      <div className="profileEdit">
        <div className="big">
            <h6>Profile</h6>
        </div>
      </div>
    </>
  );
};

export default Profile;
