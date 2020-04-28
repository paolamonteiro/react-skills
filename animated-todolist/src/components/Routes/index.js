import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import GlobalStyle from "../../styles/GlobalStyle"
import Home from "../Home"
import Navbar from "../Navbar"
import Trash from "../Trash"
import {
  ThemeSwitcherBox,
  ThemeSwitcherButton
} from "../../styles/ThemeSwitcher"
import themesIcon from "../../images/themesIcon.png"

const Routes = ({ toggletheme }) => (
  <Router>
    <GlobalStyle />
    <Navbar />
    <ThemeSwitcherBox>
      <ThemeSwitcherButton onClick={toggletheme}>
        <img src={themesIcon} alt="Day Theme" />
      </ThemeSwitcherButton>
    </ThemeSwitcherBox>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/trash" exact component={Trash} />
    </Switch>
  </Router>
)

export default Routes