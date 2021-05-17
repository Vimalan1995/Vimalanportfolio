import React from "react";
//styles
import GlobalStyle from "./components/GlobalStyles";
//components
import Nav from "./components/Nav";
//pages
import About from "./pages/About";
import Projects from "./pages/Project";
import ContactMe from "./pages/ContactInfo";
//logo
import Logo from "./components/Logo";
//animation
import { AnimatePresence } from "framer-motion";
//routers
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Logo />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/contact me" exact>
            <ContactMe />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
