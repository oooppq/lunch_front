import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../data";
import { getMultiData } from "../utils/api";
import loadingIcon from "../img/loading.svg";
import {
  AccountsContainer,
  AuthenticatedDiv,
  LoginDiv,
  JoinDiv,
} from "../styledComponents";
import { useNavigate } from "react-router-dom";
import logoutIcon from "../img/logout.png";
import closeIcon from "../img/close.png";
import noImage from "../img/no-image.png";

const Accounts = (props) => {
  const [join, setJoin] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [myStore, setMyStore] = useState(null);
  const [myMenu, setMyMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loginFail, setLoginFail] = useState(false);
  const [registerFail, setRegisterFail] = useState(false);
  const [isStoreSave, setIsStoreSave] = useState(true);

  const isAuth = props.isAuth;
  const setIsAuth = props.setIsAuth;
  const navigate = useNavigate();

  const loginOnClick = async () => {
    if (id == "" || pw == "") {
      setLoginFail(true);
    } else {
      const url = baseUrl + "accounts/login/";
      const data = JSON.stringify({ username: id, password: pw });
      try {
        const res = await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + res.data.token.access;
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("id", id);
        setIsAuth(true);
        navigate("/");
      } catch (e) {
        console.log("login fail: ", e);
        setLoginFail(true);
      }
    }
  };

  const logoutOnClick = async () => {
    const url = baseUrl + "accounts/login/";
    const data = JSON.stringify({ username: id, password: pw });
    const res = await axios.delete(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setIsAuth(false);
    navigate("/");
  };

  const registerOnClick = async () => {
    if (id == "" || pw == "" || pw2 == "") {
      setRegisterFail(true);
    } else if (pw != pw2) {
      setRegisterFail(true);
    } else {
      const url = baseUrl + "accounts/register/";
      const data = JSON.stringify({ username: id, password: pw });
      try {
        const res = await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + res.data.token.access;
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("id", id);
        setIsAuth(true);
        navigate("/");
      } catch (e) {
        console.log("register fail: ", e);
        setRegisterFail(true);
      }
    }
  };

  const deleteStore = async (e) => {
    let name = e.currentTarget.id;
    const url = baseUrl + "accounts/delete-mystore/";
    const data = JSON.stringify({ store_name: name });
    try {
      await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMyStore(myStore.filter((store) => store.store_name != name));
    } catch (e) {}
  };

  const deleteMenu = async (e) => {
    let name = e.currentTarget.id;
    const url = baseUrl + "accounts/delete-mymenu/";
    const data = JSON.stringify({ menu_name: name });
    try {
      await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMyMenu(myMenu.filter((menu) => menu.menu_name != name));
    } catch (e) {}
  };
  const savedOnClick = (e) => {
    if (e.target.id == "saved-store-title") {
      setIsStoreSave(true);
      e.target.style.backgroundColor = "#ffb74d";
      document.querySelector("#saved-menu-title").style.backgroundColor =
        "white";
    } else {
      setIsStoreSave(false);
      e.target.style.backgroundColor = "#ffb74d";
      document.querySelector("#saved-store-title").style.backgroundColor =
        "white";
    }
    // let stores = document.querySelectorAll(".saved-store-elem");
    // let menus = document.querySelectorAll(".saved-menu-elem");
    // for (let store of stores) {
    //   if (e.target.id == "saved-store-title") store.style.display = "block";
    //   else store.style.display = "none";
    // }
    // for (let menu of menus) {
    //   if (e.target.id == "saved-menu-title") menu.style.display = "block";
    //   else menu.style.display = "none";
    // }
  };

  useEffect(() => {
    let menuUrl = baseUrl + "accounts/show-mymenu/";
    let storeUrl = baseUrl + "accounts/show-mystore/";
    if (isAuth) {
      axios.defaults.headers.common["Authorization"] =
        "bearer " + JSON.parse(localStorage.getItem("token")).access;

      getMultiData([setMyMenu, setMyStore], setLoading, [menuUrl, storeUrl]);
    }
  }, []);

  return (
    <AccountsContainer>
      {isAuth ? (
        loading ? (
          <div className="loading">
            <img src={loadingIcon} alt="" />
          </div>
        ) : (
          <AuthenticatedDiv>
            <div className="auth-head">
              <div className="user-greeting">
                안녕하세요{" "}
                <span className="user-id">{localStorage.getItem("id")}</span>{" "}
                님!
              </div>

              <img src={logoutIcon} alt="" onClick={logoutOnClick} />
            </div>
            <div className="saved">
              <div className="saved-title" onClick={savedOnClick}>
                <div id="saved-store-title">찜한가게</div>
                <div id="saved-menu-title">찜한메뉴</div>
              </div>
              <div className="saved-elements">
                {myStore.map((store) => {
                  if (isStoreSave) {
                    let imgSrc = baseUrl.slice(0, -1) + store.store_image;
                    return (
                      <div
                        className="saved-store-elem saved-elem"
                        key={store.id}
                        onClick={(e) => {
                          if (e.target.className === "close") return;
                          navigate("/index/" + store.id);
                        }}
                      >
                        <div className="img-outer">
                          <img src={imgSrc ? imgSrc : noImage} alt="" />
                          <img
                            id={store.store_name}
                            className="close"
                            src={closeIcon}
                            alt=""
                            onClick={deleteStore}
                          />
                        </div>
                        <div>{store.store_name}</div>
                      </div>
                    );
                  }
                })}
                {myMenu.map((menu) => {
                  if (!isStoreSave) {
                    let imgSrc = baseUrl.slice(0, -1) + menu.menu_image;
                    return (
                      <div
                        className="saved-menu-elem saved-elem"
                        key={menu.id}
                        onClick={(e) => {
                          if (e.target.className === "close") return;
                          navigate("/index/" + menu.restaurant);
                        }}
                      >
                        <div className="img-outer">
                          <img src={imgSrc ? imgSrc : noImage} alt="" />
                          <img
                            id={menu.menu_name}
                            className="close"
                            src={closeIcon}
                            alt=""
                            onClick={deleteMenu}
                          />
                        </div>
                        <div>{menu.menu_name}</div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </AuthenticatedDiv>
        )
      ) : join ? (
        <JoinDiv>
          <div className="register-title">회원가입</div>
          <input
            className="id"
            type="text"
            onChange={(e) => {
              setId(e.target.value);
            }}
            placeholder="아이디"
          />
          <br />
          <input
            className="pw"
            type="password"
            onChange={(e) => {
              setPw(e.target.value);
            }}
            placeholder="비밀번호"
          />
          <br />
          <input
            className="pw2"
            type="password"
            onChange={(e) => {
              setPw2(e.target.value);
            }}
            placeholder="비밀번호 확인"
          />
          {registerFail ? (
            <div className="wrong-info">정보를 올바르게 기입해주세요.</div>
          ) : (
            <></>
          )}
          <button className="submit" onClick={registerOnClick}>
            회원가입
          </button>
        </JoinDiv>
      ) : (
        <LoginDiv>
          <div className="login-title">로그인</div>
          <input
            className="id"
            type="text"
            onChange={(e) => {
              setId(e.target.value);
            }}
            placeholder="아이디"
          />
          <br />
          <input
            className="pw"
            type="password"
            onChange={(e) => {
              setPw(e.target.value);
            }}
            placeholder="비밀번호"
          />
          <br />
          {loginFail ? (
            <div className="wrong-info">
              아이디 또는 비밀번호를 잘못 입력했습니다.{" "}
            </div>
          ) : (
            <></>
          )}
          <button className="submit" onClick={loginOnClick}>
            로그인
          </button>
          <div
            onClick={() => {
              setJoin(true);
              setId("");
              setPw("");
            }}
            className="goto-register"
          >
            간편 회원가입하기
          </div>
        </LoginDiv>
      )}
    </AccountsContainer>
  );
};

export default Accounts;
