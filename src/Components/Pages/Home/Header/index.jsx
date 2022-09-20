import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";

export default function HeaderFunc() {
  return(
    <>
      <Container>
            <ul>
                <li><Link to="/" >ABOUT</Link></li>
                <li><Link to="/erro" >RECIPES</Link></li>
                <li>SUBSCRIBE</li>
            </ul>
        </Container>
    </>
  )
}