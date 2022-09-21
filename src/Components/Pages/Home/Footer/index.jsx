import React from "react";

import * as S from './style';

export default function FooterFunc() {
  return(
    <>
      <S.Container>
          <S.MenuLeft>
            <ul>
              <li><img src="" alt="instagram" /></li>
              <li><img src="" alt="twiter" /></li>
              <li><img src="" alt="Facebook" /></li>
              <li><img src="" alt="Pinterest" /></li>
            </ul>
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