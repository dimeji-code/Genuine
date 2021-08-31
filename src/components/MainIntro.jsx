import React from 'react'
import Nav from "react-bootstrap/Nav"
import {Link} from "react-router-dom";

const MainIntro = ({navigation, route}) =>{

    return(
        <div class="middleContainer">
            <div class="row intro">
                <div class="col-lg-6">
                    <h1 class="question">Having trouble finding the perfect gift?</h1>
                    <h4 class="desc col-lg-6">
                    Find popular suggestions or get unique gift ideas for that special someone.
                    </h4>
                    <h5 class="desc col-lg-6">
                    <a
                        href="#"
                        >To use as a guest, click on the add icon.</a>
                    </h5>
                </div>

                <div class="col-lg-6 add">
                    <Link to="/questions" >
                    <img class="col-lg-6 added" src={process.env.PUBLIC_URL +"/add500.png"} />
                    </Link>
                </div>

            </div>
        <div class="bottomContainer">
          {/* <a href="./login.html"> */}
          <a >
            <button disabled={true} class="btn btn-outline-secondary">Login</button>
          </a>
          {/* <a href="./signup.html"> */}
          <a >
            <button disabled={true} class="btn btn-outline-dark">Signup</button>
          </a>
          <p class="forgot">
            <a
              href=""
              >Forgot email or password?</a>
          </p>
        </div>
        </div>
    )
}

export default MainIntro