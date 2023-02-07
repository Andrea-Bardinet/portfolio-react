import './styles/App.css';
import Landing from './pages/Landing';
import Skills from './pages/Skills';
import Scroll from './components/Scroll';

import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import Projects from './pages/Projects';
import About from './pages/About';


function Main() {
  function debouncer(func, timeout) {
    var timeoutID, timeout = timeout || 150;
    return function () {
      var scope = this, args = arguments;
      clearTimeout(timeoutID);
      timeoutID = setTimeout(function () {
        func.apply(scope, Array.prototype.slice.call(args));
      }, timeout);
    };
  }

  document.addEventListener("wheel", debouncer(function (e) {
    if (e.deltaY > 0) {
      pageUp();
    } else {
      pageDown();
    }
  }, 0))

  const [pageDirection, setPageDirection] = useState(0)
  const scrollManager = new Scroll('/', 'skills')
  const navigate = useNavigate();

  useEffect(() => {
    if (pageDirection === 1) {
      navigate(scrollManager.up)
      setPageDirection(0)
    } else if (pageDirection === -1) {
      navigate(scrollManager.down)
      setPageDirection(0)
    }
  },[pageDirection])

  const pageUp = (e) => {
    setPageDirection(1)
  }

  const pageDown = (e) => {
    setPageDirection(-1)
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

