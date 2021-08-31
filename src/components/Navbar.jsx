import React from 'react'
import Nav from "react-bootstrap/Nav"

const Navbar = () =>{
    return(

        <nav class="navbar navbar-light sticky-top" >
        <a class="navbar-brand title" style={{fontSize:20,fontFamily:"MuseoModerno"}} href="/Genuine">genuine</a>

        <ul class="nav justify-content-end navOpt">
          <li class="nav-item">
            <a class="nav-link" style={{fontSize:20,fontFamily:"Crimson Text, serif"}} href=""> about</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" style={{fontSize:20,fontFamily:"Crimson Text, serif"}} href="">trending</a>
          </li>
        </ul>
      </nav> 

    )
}


export default Navbar