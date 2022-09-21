import styled from "styled-components";

export const Container = styled.header`
    border: solid 2px purple;
    width: 100%;
    height: auto;
    
    a{
        text-decoration: none;        
        &:hover{
            text-shadow: 0 0 10px red;
            }
    }    

`
export const Top = styled.div`
    background-color: #F2F4F1;
    border: solid 1px;
    width: 100%;
    height: 499px;
    
    a{
        text-decoration: none;        
        &:hover{
            text-shadow: 0 0 10px red;
            }
    }    

`
export const Mid = styled.div`
    background-color: #F2F4F1;
    border: solid 1px red;
    width: 100%;
    height: 399px;
    
    a{
        text-decoration: none;        
        &:hover{
            text-shadow: 0 0 10px red;
            }
    }    

`
export const Bot = styled.div`
border: solid 1px green;
    background-color: #F2F4F1;
    width: 100%;
    height: 299px;
    
    a{
        text-decoration: none;        
        &:hover{
            text-shadow: 0 0 10px red;
            }
    }    

`