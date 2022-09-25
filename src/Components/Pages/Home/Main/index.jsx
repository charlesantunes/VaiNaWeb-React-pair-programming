import React from "react";

import * as S from './style'

export default function MainFunc() {
  return(
    <>
        <S.Top>
          <h1>MainTop</h1>
          <p>testando header</p>
        </S.Top>

        <S.Mid>
          <h1>MainMid</h1>
        </S.Mid>

        <S.Bot>
          <h1>MainBot</h1>
        </S.Bot>
    </>
  )
}