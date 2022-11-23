import React from "react";
import { NavUl, NavLi, NavImg } from "../styledComponents";
import { useNavigate } from "react-router-dom";
import homeImg from "../img/home.png";
import foodImg from "../img/food.png";
import rouletteImg from "../img/roulette.png";
import titleLogo from "../img/logo2.png";
import accountsLogo from "../img/accounts.png";
const Nav = () => {
  const navigate = useNavigate();
  const navOnClick = (e) => {
    let id = e.target.id;
    if (id === "home") {
      navigate("/");
    } else if (id === "index") {
      navigate("/index");
    } else if (id === "roulette") {
      navigate("/roulette");
    }
    else navigate("/accounts");
  };
  return (
    <NavUl>
      <NavLi>
        <NavImg src={foodImg} id="index" onClick={navOnClick}></NavImg>
      </NavLi>
      <NavLi>
        <NavImg src={homeImg} id="home" onClick={navOnClick}></NavImg>
      </NavLi>
      <NavLi>
        <NavImg src={rouletteImg} id="roulette" onClick={navOnClick}></NavImg>
      </NavLi>
      <NavLi>
        <NavImg src={accountsLogo} id="accounts" onClick={navOnClick}></NavImg>
      </NavLi>

    </NavUl>
  );
};

export default Nav;
