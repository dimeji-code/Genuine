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

           <Switch>
                <Route exact path="/Genuine"  >
                    <MainIntro />
                </Route>
                 
                <Route exact path="/questions"  >
                <IntroQuestionScreen/>
                </Route>
                 
                <Route exact path="/gifts"  component={Recommendations}/>
           </Switch>

        </Router>
    )
}

export default Main