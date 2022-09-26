import React from "react";

import Instagram from '../../../../Assets/InstagramEllipse.png'
import Twitter from '../../../../Assets/Twitter-ellipse.png'
import Facebook from '../../../../Assets/FacebookEllipse.png'
import Pinterest from '../../../../Assets/PinterestEllipse.png'
import * as S from './style';

export default function FooterFunc() {
  return(
    <>
      <S.Container>
          <S.MenuLeft>
            <ul>
              <li><img src={Instagram} alt="instagram" /></li>
              <li><img src={Twitter} alt="twiter" /></li>
              <li><img src={Facebook} alt="Facebook" /></li>
              <li><img src={Pinterest} alt="Pinterest" /></li>
            </ul>
          </S.MenuLeft>
          <S.MenuRight>
            <ul>
              <li>ABOUT</li>
              <li>RECIPES</li>
              <li>SUBSCRIBE</li>
            </ul>
          </S.MenuRight>
          <S.Rodape>
            <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</p>
          </S.Rodape>
      </S.Container>
    </>
  )
}