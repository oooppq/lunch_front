import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderDiv } from "../styledComponents";
import titleLogo from "../img/logo2.png";
import optionsLogo from "../img/options.png";
import accountsLogo from "../img/accounts.png";
const Header = (props) => {
  const navigate = useNavigate();
  const headerOnClick = (e) => {
    if (e.target.id == "logo") {
      navigate("/");
    } else if (e.target.id == "accounts") {
      navigate("/accounts");
    }
  };
  return (
    <HeaderDiv className="title" onClick={headerOnClick}>
      <img src={optionsLogo} alt="" />
      <img id="logo" src={titleLogo} alt="" />
      <img src={accountsLogo} alt="" id="accounts" />
    </HeaderDiv>
  );
};

export default Header;
