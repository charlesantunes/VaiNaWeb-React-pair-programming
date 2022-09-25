import React from "react";

import * as S from "./style";
//import Mascara2 from '../../../../Assets/Grupo de máscara 2.png'
import RC from '../../../../Assets/RC.png'

export default function HeaderFunc() {
  return(
    <>
      <S.Container>
        <S.Box>
        <img src={RC} alt="imagem"/>
          <S.BoxMenu>
              <S.MenuLeft>
                <h2>RC</h2>
              </S.MenuLeft>
              
              <S.MenuRight>
                <ul>
                  <li>ABOUT</li>
                  <li>RECIPES</li>
                  <li>SUBSCRIBE</li>
                </ul>
              </S.MenuRight>
          </S.BoxMenu>
        </S.Box>
      </S.Container>
    </>
  )
}