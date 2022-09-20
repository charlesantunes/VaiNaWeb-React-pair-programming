import React from "react";
import { Link } from "react-router-dom";

import { Container, Footer } from "./style";

export default function Menu() {
    return(
        <>
        <Container>
            <ul>
                <li><Link to="/" >ABOUT</Link></li>
                <li><Link to="/erro" >RECIPES</Link></li>
                <li>SUBSCRIBE</li>
            </ul>
        </Container>

        
        <Footer>
            <ul>
                <li><Link to="/" >ABOUT</Link></li>
                <li><Link to="/erro" >RECIPES</Link></li>
                <li>SUBSCRIBE</li>
            </ul>
        </Footer>



        </>
    )
}