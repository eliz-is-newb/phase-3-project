import React from "react";
import Home from "./components/Home"; 
import Intro from "./components/Intro";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GamesLibrary from "./components/GamesLibrary";
import TestElementsPage from "./components/TestElementsPage";
import CartoonLibrary from "./components/CartoonLibrary";
import QuotesLibrary from "./components/QuotesLibrary";
import AdminDetails from "./components/AdminDetails";
import GamesContainer from "./components/GamesContainer";
import CartoonsContainer from "./components/CartoonsContainer";
import QuotesContainer from "./components/QuotesContainer";

function App() {
  return (
    <div>
      <Router> 
          <Routes>
          {/* <Route exact key={1}    path="/"                 element={<Intro />}/>  */}
          <Route exact key={1}    path="/"             element={<Home />}/>
          <Route exact key={3}    path="/gamelibrary"      element={<GamesLibrary />}/>
          <Route exact key={4}    path="/testelementspage" element={<TestElementsPage />}/>
          <Route exact key={5}    path="/cartoonlibrary"   element={<CartoonLibrary />}/>
          <Route exact key={6}    path="/quoteslibrary"   element={<QuotesLibrary />}/>
          <Route exact key={7}    path="/admin"           element={<AdminDetails />}/>
          <Route exact key={8}    path="/admin-gamelibrary"           element={<GamesContainer />}/>
          <Route exact key={9}    path="/admin-cartoonlibrary"           element={<CartoonsContainer />}/>
          <Route exact key={10}   path="/admin-quoteslibrary"           element={<QuotesContainer />}/>

          </Routes> 
      </Router>
    </div>
  );
}

export default App;
