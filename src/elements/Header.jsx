import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderDiv } from "../styledComponents";

const Header = () => {
  const navigate = useNavigate();
  const headerOnClick = (e) => {
    navigate("/");
  };
  return (
    <HeaderDiv className="title" onClick={headerOnClick}>
      ㅈㅁㅊ
    </HeaderDiv>
  );
};

export default Header;
