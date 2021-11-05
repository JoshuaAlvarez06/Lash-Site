import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavDropdown from "./components/navbar/NavDropdown";
import GlobalStyle from "./globalStyles";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";
import MyWork from "./components/myWork/MyWork";
import Contact from "./components/contact/Contact";
import Faq from "./components/faq/Faq";
import Page from "./components/Page";
import Prices from "./components/prices/Prices";

function App() {
  const [visibleNavMenu, setVisibleNavMenu] = React.useState(false);
  const navClickHandler = () => setVisibleNavMenu(!visibleNavMenu);
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };

  return (
    <>
      <GlobalStyle />
      <Navbar navClickHandler={navClickHandler} />
      {visibleNavMenu && <NavDropdown navClickHandler={navClickHandler} />}
      <Page>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/my-work">
            <MyWork />
          </Route>
          <Route exact path="/prices">
            <Prices />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Page>
      <Footer />
    </>
  );
}

export default App;
