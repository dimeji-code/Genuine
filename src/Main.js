import React from 'react'
import Navbar from "./components/Navbar"
import MainIntro from "./components/MainIntro"
import IntroQuestionScreen from "./pages/IntroQuestionScreen"
import About from "./pages/About"
import Trending from "./pages/Trending"
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
                <Route exact path="/Genuine/about"  >
                    <About />
                </Route>  
                <Route exact path="/Genuine/trending"  >
                    <Trending />
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