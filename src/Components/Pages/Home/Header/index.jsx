import React from "react";

import * as S from "./style";

export default function HeaderFunc() {
  return(
    <>
      <S.Container>
        <S.Box>
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
        </S.Box>
      </S.Container>
    </>
  )
}