import React from "react";

import walkV1 from "../../assets/images/walkV1.png";

const LoginBanner = () => {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="d-none d-md-block w-100 h-100 text-end align-content-start"
    >
      <img src={walkV1} alt="login banner" style={{ width: "70%" }} />
    </div>
  );
};

export default LoginBanner;
