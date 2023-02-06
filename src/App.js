import './styles/App.css';
import Navbar from './components/Navbar'
import Landing from './pages/Landing';
import Skills from './pages/Skills';
import Scroll from './components/Scroll';

import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import Projects from './pages/Projects';
import About from './pages/About';

function Main() {

  const scrollManager = new Scroll('/', 'skills')
  const navigate = useNavigate();


  const pageUp = (e) => {

    navigate(scrollManager.up)

  }

  const pageDown = (e) => {

    navigate(scrollManager.down)

  }

  const swipeHandler = useSwipeable({
    onSwipedUp: pageUp,
    onSwipedDown: pageDown
  })


  const location = useLocation();
  return (
    <div {...swipeHandler} className="App">
      <AnimatePresence mode="wait" initial={false} >
        <Routes location={location} key={location.pathname}>

          <Route path="/" element={
            <Landing scrollManager={scrollManager} pageUp={pageUp} pageDown={pageDown}></Landing>
          }></Route>

          <Route path="/skills" element={
            <Skills scrollManager={scrollManager} pageUp={pageUp} pageDown={pageDown}></Skills>
          }></Route>

          <Route path="/projects" element={
            <Projects scrollManager={scrollManager} pageUp={pageUp} pageDown={pageDown}></Projects>
          }></Route>

          <Route path="/about" element={
            <About scrollManager={scrollManager} pageUp={pageUp} pageDown={pageDown}></About>
          }></Route>

        </Routes>

      </AnimatePresence >
    </div>
  )
}

function App() {


  return (
    <Router>
      <Main></Main>
    </Router>
  );
}

export default App;

