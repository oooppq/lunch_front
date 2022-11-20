import React from "react";
import { Wrap } from "./styledComponents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./elements/Header";
import Home from "./elements/Home";
import Index from "./elements/Index";
import Nav from "./elements/Nav";
import Roulette from "./elements/Roulette";

const App = () => {
  return (
    <Wrap>
      <Router>
        <Header>ㅈㅁㅊ</Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/index" element={<Index />}></Route>
          <Route path="/roulette" element={<Roulette />}></Route>
        </Routes>

        <Nav></Nav>
      </Router>
    </Wrap>
  );
};

export default App;
