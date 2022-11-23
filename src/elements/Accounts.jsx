import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../data";

const Accounts = () => {
  const [join, setJoin] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [login, setLogin] = useState(null);

  const onSubmit = () => {
    if (id == "" || pw == "") {
      console.log("문제있어");
    } else {
      const url = baseUrl + "accounts/login/";
      const data = JSON.stringify({ username: id, password: pw });
      axios
        .post(url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data.token.access);
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + res.data.token.access;
          console.log("res.data.accessToken:" + res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const testOnClick = async () => {
    let url = baseUrl + "accounts/show-mystore/";

    let res = await axios.get(url);
    console.log(res.data);
  };

  return (
    <div>
      {login}
      {join ? (
        <div>
          <div>회원가입</div>
          <form action="">
            <input type="text" />
            <input type="text" />
            <input type="submit" />
          </form>
        </div>
      ) : (
        <div>
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
            {/* <button onClick={onSubmit}>로그인</button> */}
            {/* <input type="submit"  /> */}
          </form>
          <button
            onClick={() => {
              setJoin(true);
            }}
          >
            회원가입
          </button>
        </div>
      )}
    </div>
  );
};

export default Accounts;
