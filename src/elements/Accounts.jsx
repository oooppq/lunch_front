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

const Accounts = (props) => {
  const [join, setJoin] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [login, setLogin] = useState(null);
  const [myStore, setMyStore] = useState(null);
  const [myMenu, setMyMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token") != null);
  // const isAuth =

  const onSubmit = () => {
    if (id == "" || pw == "") {
      if (id == "") console.log("아이디를 입력해주세요.");
      else if (pw == "") console.log("비밀번호를 입력해주세요.");
    } else {
      let res = props.handleLogin(id, pw);
      if (res) {
        setIsAuth(true);
        let url = baseUrl + "accounts/show-mystore/";
        getData(setMyStore, setLoading, url);
      }
    }
  };
  const testOnClick = async () => {
    let url = baseUrl + "accounts/show-mystore/";

    let res = await axios.get(url);
    setMyStore(res.data);
  };

  useEffect(() => {
    let url = baseUrl + "accounts/show-mystore/";
    // let isAuth = axios.defaults.headers.common["Authorization"];
    if (isAuth) getData(setMyStore, setLoading, url);
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
                return <div key={store.id}></div>;
              })}
            </div>
          </AuthenticatedDiv>
        )
      ) : join ? (
        <JoinDiv> </JoinDiv>
      ) : (
        <LoginDiv>
          <div>로그인</div>
          <form action="">
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
            <div onClick={testOnClick}>테스트용 버튼이에요</div>
            <div onClick={onSubmit}>로그인</div>
          </form>
        </LoginDiv>
      )}
    </AccountsContainer>
    // <div>
    //   {isAuth ? <div></div> : <div></div>}
    //   {loading ? (
    //     <div className="loading">
    //       <img src={loadingIcon} alt="" />
    //     </div>
    //   ) : (
    //     <div>
    //       {props.state.authenticated ? (
    //         <div>
    //           {myStore.map((store) => {
    //             return <div key={store.id}>{store.store_name}</div>;
    //           })}
    //         </div>
    //       ) : (
    //         <div></div>
    //       )}
    //       {join ? (
    //         <div>
    //           <div>회원가입</div>
    //           <form action="">
    //             <input type="text" />
    //             <input type="text" />
    //             <input type="submit" />
    //           </form>
    //         </div>
    //       ) : (
    //         <div>
    // <div>로그인</div>
    // <form action="">
    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       setId(e.target.value);
    //     }}
    //   />
    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       setPw(e.target.value);
    //     }}
    //   />
    //   <div onClick={testOnClick}>테스트용 버튼이에요</div>
    //   <div onClick={onSubmit}>로그인</div>
    //             {/* <button onClick={onSubmit}>로그인</button> */}
    //             {/* <input type="submit"  /> */}
    //           </form>
    //           <button
    //             onClick={() => {
    //               setJoin(true);
    //             }}
    //           >
    //             회원가입
    //           </button>
    //         </div>
    //       )}
    //     </div>
    //   )}
    // </div>
  );
};

export default Accounts;
