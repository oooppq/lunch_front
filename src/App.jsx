import React, { useEffect, useReducer, useState } from "react";
import { Wrap } from "./styledComponents";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Header from "./elements/Header";
import Home from "./elements/Home";
import Index from "./elements/Index";
import Nav from "./elements/Nav";
import Roulette from "./elements/Roulette";
import Accounts from "./elements/Accounts";
import Detail from "./elements/Detail";
import "./App.css";
import { loginApi } from "./utils/api";
import axios from "axios";

const initialState = {
  authenticated: false,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.token, authenticated: action.result };
    default:
      return state;
  }
};

const App = () => {
  const [options, setOptions] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { authenticated } = state;

  function handleLogin(id, pw) {
    let token = loginApi(id, pw);

    if (token) {
      console.log("로그인 성공!");
      dispatch({
        type: "SET_TOKEN",
        token: token,
        result: true,
      });
      // axios.defaults.headers.common["Authorization"] = "Bearer " + token.access;
      return true;
    } else {
      console.log("로그인 실패");
      dispatch({
        type: "SET_TOKEN",
        token: null,
        result: false,
      });
      return null;
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      let token = JSON.parse(localStorage.getItem("token"))["access"];
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      // console.log(axios.defaults.headers.common["Authorization"]);
      dispatch({
        type: "SET_TOKEN",
        token: token,
        result: true,
      });
    } else {
      console.log("로그인 실패");
      dispatch({
        type: "SET_TOKEN",
        token: null,
        result: false,
      });
    }
  }, []);

  return (
    <Wrap>
      <Router>
        <Header options={options}></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/index"
            element={<Index setOptions={setOptions} />}
          ></Route>
          <Route path="/index/:id" element={<Detail />}></Route>
          <Route
            path="/roulette"
            element={<Roulette options={options} />}
          ></Route>
          <Route
            path="/accounts"
            element={<Accounts handleLogin={handleLogin} state={state} />}
          ></Route>
        </Routes>
        <Nav></Nav>
      </Router>
    </Wrap>
  );
};

export default App;
