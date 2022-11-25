import React from "react";
import { NavUl, NavLi, NavImg } from "../styledComponents";
import { useNavigate } from "react-router-dom";
import homeImg from "../img/home.png";
import foodImg from "../img/food.png";
<<<<<<< HEAD
import rouletteImg from "../img/roulette1.png";
import titleLogo from "../img/logo2.png";
import accountsLogo from "../img/accounts.png";
import locImg from "../img/pin.png";
=======
import rouletteImg from "../img/roulette.png";
import titleLogo from "../img/logo2.png";
import accountsLogo from "../img/accounts.png";
>>>>>>> 64b93c844d3b9d5d22194db869b9a4f4fb14d21f
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
<<<<<<< HEAD
        <img
          src={locImg}
          alt=""
          className="icon"
          id="index"
          onClick={navOnClick}
        />
        {/* <BsIcons.BsList className="icon" id="index" onClick={navOnClick} /> */}
=======
        <BsIcons.BsList className="icon" id="index" onClick={navOnClick} />
>>>>>>> 64b93c844d3b9d5d22194db869b9a4f4fb14d21f
      </NavLi>
      <NavLi>
        <BiIcons.BiHomeAlt className="icon" id="home" onClick={navOnClick} />
      </NavLi>
      <NavLi>
<<<<<<< HEAD
        <img
          src={rouletteImg}
          alt=""
=======
        <GrIcons.GrGamepad
>>>>>>> 64b93c844d3b9d5d22194db869b9a4f4fb14d21f
          className="icon"
          id="roulette"
          onClick={navOnClick}
        />
<<<<<<< HEAD
        {/* <GrIcons.GrGamepad
          className="icon"
          id="roulette"
          onClick={navOnClick}
        /> */}
=======
>>>>>>> 64b93c844d3b9d5d22194db869b9a4f4fb14d21f
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
