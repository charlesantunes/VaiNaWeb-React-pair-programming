import styled from "styled-components";

export const Container = styled.div`
    background-color: #F2F4F1;
    width: 100%;
    height: 220px;
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
        list-style: none;
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
    img{
        width: 80%;
    }
`
export const MenuLeft = styled.div`
height: 40px;
width: 22%;
margin-left: 4%;
display: flex;
justify-content: space-around;
`
export const MenuRight = styled.div`
height: 40px;
width: 40%;
margin-right:4%;
display: flex;
justify-content: space-around;
`
export const Rodape = styled.div`
position: absolute;
top: 540vh;
background-color: #446061;
width: 100%;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
p{
    font-size: 0.8rem;
}
`