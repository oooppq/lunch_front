import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../data";
import { getData, loginApi } from "../utils/api";
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
  const [login, setLogin] = useState(null);
  const [myStore, setMyStore] = useState(null);
  const [myMenu, setMyMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token") != null);
  const navigate = useNavigate();

  const loginOnClick = async () => {
    if (id == "" || pw == "") {
      if (id == "") console.log("아이디를 입력해주세요.");
      else if (pw == "") console.log("비밀번호를 입력해주세요.");
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
        setIsAuth(true);
        navigate("/");
      } catch (e) {
        console.log("login fail: ", e);
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
    setIsAuth(false);
    navigate("/");
  };

  const addStore = async () => {
    const url = baseUrl + "accounts/mystore/";
    const data = JSON.stringify({ store_name: "가츠벤또" });
    await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  useEffect(() => {
    let url = baseUrl + "accounts/show-mystore/";
    // let isAuth = axios.defaults.headers.common["Authorization"];
    // console.log(axios.defaults.headers.common["Authorization"]);
    if (isAuth) {
      axios.defaults.headers.common["Authorization"] =
        "bearer " + JSON.parse(localStorage.getItem("token")).access;
      getData(setMyStore, setLoading, url);
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
            <div>찜목록</div>
            <div>
              {myStore.map((store) => {
                return <div key={store.id}>{store.store_name}</div>;
              })}
            </div>
            <div onClick={logoutOnClick}>test logout</div>
            <div onClick={addStore}>test add button</div>
          </AuthenticatedDiv>
        )
      ) : join ? (
        <JoinDiv>
          <div>회원가입</div>
          <input type="text" />
          <input type="text" />
          <button>회원가입</button>
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
            type="text"
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
          <button onClick={loginOnClick}>로그인</button>
          <div
            onClick={() => {
              setJoin(true);
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
