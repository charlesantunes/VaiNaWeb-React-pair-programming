import React from "react";

import * as S from './style';

export default function FooterFunc() {
  return(
    <>
      <S.Container>
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
      </S.Container>
    </>
  )
}