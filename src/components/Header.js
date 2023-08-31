import React from "react";
import { LOGO_URL } from "../utils/ImageLinks";

const Header = () => {
  return (
    <div className="absolute z-10">
      <img className="w-2/12 contrast-125  px-1" src={LOGO_URL} alt="" />
    </div>
  );
};

export default Header;
