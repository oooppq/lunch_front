import React, { useState } from "react";
import {
  AccountBox,
} from "../styledComponents";
const Accounts = () => {
  const [join, setJoin] = useState(false);

  return (
    <AccountBox>
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
            <input type="text" />
            <input type="text" />
            <input type="submit" />
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
    </AccountBox>
  );
};

export default Accounts;
