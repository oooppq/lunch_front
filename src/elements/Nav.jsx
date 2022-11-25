import React from "react";
import { NavUl, NavLi, NavImg } from "../styledComponents";
import { useNavigate } from "react-router-dom";
import homeImg from "../img/home.png";
import foodImg from "../img/food.png";
import rouletteImg from "../img/roulette1.png";
import titleLogo from "../img/logo2.png";
import accountsLogo from "../img/accounts.png";
import locImg from "../img/pin.png";
import * as BiIcons from "react-icons/bi";
import * as VscIcons from "react-icons/vsc";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";

const Nav = () => {
  const navigate = useNavigate();
  const navOnClick = (e) => {
    let id = e.currentTarget.id;

    if (id === "home") {
      navigate("/");
    } else if (id === "index") {
      navigate("/index");
    } else if (id === "roulette") {
      navigate("/roulette");
    } else navigate("/accounts");
  };
  return (
    <NavUl>
      <NavLi>
        <img
          src={locImg}
          alt=""
          className="icon"
          id="index"
          onClick={navOnClick}
        />
        {/* <BsIcons.BsList className="icon" id="index" onClick={navOnClick} /> */}
      </NavLi>
      <NavLi>
        <BiIcons.BiHomeAlt className="icon" id="home" onClick={navOnClick} />
      </NavLi>
      <NavLi>
        <img
          src={rouletteImg}
          alt=""
          className="icon"
          id="roulette"
          onClick={navOnClick}
        />
        {/* <GrIcons.GrGamepad
          className="icon"
          id="roulette"
          onClick={navOnClick}
        /> */}
      </NavLi>
      <NavLi>
        <VscIcons.VscAccount
          className="icon"
          id="accounts"
          onClick={navOnClick}
        />
      </NavLi>
    </NavUl>
  );
};

export default Nav;
