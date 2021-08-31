import React from 'react'
// import Button from "react-bootstrap/Button"
import Navbar from "./components/Navbar"
import MainIntro from "./components/MainIntro"
import IntroQuestionScreen from "./pages/IntroQuestionScreen"
import Recommendations from "./pages/Recommendations"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Main = () =>{
    return(
        <Router>
           <Navbar/>
           <MainIntro/>

           <Switch>
                <Route path="/" exact>
                 <MainIntro/>
                </Route>
                <Route path="/q" exact>
                 <IntroQuestionScreen/>
                </Route>
                <Route path="/gifts" exact>
                 <Recommendations/>
                </Route>
           </Switch>

        </Router>
    )
}

export default Main