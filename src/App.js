import React from "react";
import Home from "./components/Home"; 
import Intro from "./components/Intro";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GamesLibrary from "./components/GamesLibrary";
import TestElementsPage from "./components/TestElementsPage";
import CartoonLibrary from "./components/CartoonLibrary";
import QuotesLibrary from "./components/QuotesLibrary";

function App() {
  return (
    <div>
      <Router> 
          <Routes>
          <Route exact key={1}    path="/"                 element={<Intro/>}/> 
          <Route exact key={2}    path="/game"             element={<Home/>}/>
          <Route exact key={3}    path="/gamelibrary"      element={<GamesLibrary />}/>
          <Route exact key={4}    path="/testelementspage" element={<TestElementsPage />}/>
          <Route exact key={5}    path="/cartoonlibrary"   element={<CartoonLibrary />}/>
          <Route exact key={6}    path="/quoteslibrary"   element={<QuotesLibrary />}/>
          </Routes> 
      </Router>
    </div>
  );
}

export default App;
