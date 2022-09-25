import styled from "styled-components";
import Mascara2 from '../../../../Assets/Grupo-de-máscara2.png'


export const Container = styled.header`
    width: 100%;
    height: 864px;
    display: flex;
    justify-content: center;
    align-items: center;

    `
export const Box = styled.div`
    position: relative;
    border: solid 1px blue;
    width: 96%;
    height: 96%;
    display: flex;
    justify-content: center;

    background-image: url(${Mascara2});
    background-size: 100%;
    a{
        text-decoration: none;
            
        &:hover{
            text-shadow: 0 0 10px red;
        }
    }
    img{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index:-1;
    }
    
`

export const BoxMenu = styled.div`
border: solid green;
height: 20vh;
width: 90%;
    display: flex;
    justify-content: space-between;

`
export const MenuLeft = styled.div`
border: solid 1px;
height: 80px;
display: flex;
align-items: flex-end;
`
export const MenuRight = styled.div`
border: solid 1px;
width: 40%;
height: 80px;
display: flex;
align-items: flex-end;
ul{
    display: flex;
    justify-content: space-around;
}
li{
        font-size: 1.5rem;
        &:hover{
        text-decoration: none;
        transition: all 1s;
        transform: scale(1.2);
        text-decoration: dotted;
        cursor: pointer;
        }
    }
`