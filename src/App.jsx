import React, { useState } from "react";
import { Wrap } from "./styledComponents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./elements/Header";
import Home from "./elements/Home";
import Index from "./elements/Index";
import Nav from "./elements/Nav";
import Roulette from "./elements/Roulette";
import Accounts from "./elements/Accounts";
import Detail from "./elements/Detail";
import "./App.css";

const App = () => {
  const [options, setOptions] = useState([]);

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
          <Route path="/accounts" element={<Accounts />}></Route>
        </Routes>

        <Nav></Nav>
      </Router>
    </Wrap>
  );
};

export default App;
