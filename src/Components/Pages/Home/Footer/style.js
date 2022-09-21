import styled from "styled-components";

export const Container = styled.footer`
    background-color: #F2F4F1;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
        width: 70%;
        display: flex;
        justify-content: space-around;
    }
    li{
        font-size: 1rem;
        &:hover{
        text-decoration: none;
        transition: all 1s;
        transform: scale(1.2);
        text-decoration: dotted;
        }
    }
    a{
        text-decoration: none;
        
        &:hover{
            text-shadow: 0 0 10px red;
            }
    }    
`
export const MenuLeft = styled.div`
border: solid 1px;
`
export const MenuRight = styled.div`
border: solid 1px;
width: 30%;
`