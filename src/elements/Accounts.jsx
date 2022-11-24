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

const Accounts = (props) => {
  const [join, setJoin] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [myStore, setMyStore] = useState(null);
  const [myMenu, setMyMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [isAuth, setIsAuth] = useState(localStorage.getItem("token") != null);
  const isAuth = props.isAuth;
  const setIsAuth = props.setIsAuth;
  const [loginFail, setLoginFail] = useState(false);
  const [registerFail, setRegisterFail] = useState(false);
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

  const addStore = async () => {
    const url = baseUrl + "accounts/mymenu/";
    const data = JSON.stringify({ menu_name: "명란크림우동" });
    await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    let menuUrl = baseUrl + "accounts/show-mymenu/";
    let storeUrl = baseUrl + "accounts/show-mystore/";
    if (isAuth) {
      axios.defaults.headers.common["Authorization"] =
        "bearer " + JSON.parse(localStorage.getItem("token")).access;
      // getData(setMyStore, setLoading, url);
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
            <div>
              안녕하세요! <span>{localStorage.getItem("id")}</span> 님
            </div>
            <div>찜목록</div>
            <div>
              가게찜
              {myStore.map((store) => {
                return <div key={store.id}>{store.store_name}</div>;
              })}
            </div>
            <div>
              메뉴찜
              {myMenu.map((menu) => {
                return <div key={menu.id}>{menu.menu_name}</div>;
              })}
            </div>
            <div onClick={logoutOnClick}>test logout</div>
            <div onClick={addStore}>test add button</div>
          </AuthenticatedDiv>
        )
      ) : join ? (
        <JoinDiv>
          <div>회원가입</div>
          <input
            type="text"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="password"
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            onChange={(e) => {
              setPw2(e.target.value);
            }}
          />
          <button onClick={registerOnClick}>회원가입</button>
        </JoinDiv>
      ) : (
        <LoginDiv>
          <div>로그인</div>
          <input
            type="text"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <input
            type="password"
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
          <button onClick={loginOnClick}>로그인</button>
          <div
            onClick={() => {
              setJoin(true);
              setId("");
              setPw("");
            }}
          >
            회원가입하기
          </div>
        </LoginDiv>
      )}
    </AccountsContainer>
  );
};

export default Accounts;
