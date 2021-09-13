import React from 'react'
import Nav from "react-bootstrap/Nav"
import {Link} from "react-router-dom";

const Navbar = () =>{
    return(

        <nav class="navbar navbar-light sticky-top" >
        <a class="navbar-brand title" style={{fontSize:20,fontFamily:"MuseoModerno"}} href="/Genuine">genuine</a>

        <ul class="nav justify-content-end navOpt">
          <li class="nav-item">
          {/* <a class="nav-link" style={{fontSize:20,fontFamily:"Crimson Text, serif"}} href="/about"> about</a> */}
          <Link class="nav-link" style={{fontSize:20,fontFamily:"Crimson Text, serif"}} to="/about"> about</Link>
          </li>

          <li class="nav-item">
          {/* <a class="nav-link" style={{fontSize:20,fontFamily:"Crimson Text, serif"}} href="/trending">trending</a> */}
          <Link class="nav-link" style={{fontSize:20,fontFamily:"Crimson Text, serif"}} to="/trending">trending</Link>
          </li>
        </ul>
      </nav> 

    )
}


export default Navbar