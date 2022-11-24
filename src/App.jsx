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

const App = () => {
  const [options, setOptions] = useState([]);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token") != null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let token = JSON.parse(localStorage.getItem("token"))["access"];
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
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
            element={<Accounts isAuth={isAuth} setIsAuth={setIsAuth} />}
          ></Route>
        </Routes>
        <Nav></Nav>
      </Router>
    </Wrap>
  );
};

export default App;
