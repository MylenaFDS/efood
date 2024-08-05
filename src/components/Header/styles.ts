import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
/* Header */

position: absolute;
width: 2031.81px;
height: 186px;
left: 0px;
top: -23px;
background: ${cores.creme};
  object-fit:cover;
`;

export const Fundo = styled.img`
position: absolute;
width: 100%;
height: 100%;
left: 0px;
top: -24px;
`;

export const Logo = styled.img`
  position: absolute;
  width: 125px;
  height: 57.5px;
  left: 621px;
  top: 40px;

  background: ${cores.coral};
`;

export const TermRestaurants = styled.text`
/* Restaurantes */

position: absolute;
width: 109px;
height: 21px;
left: 171px;
top: 59px;

font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 21px;
/* identical to box height */
text-align: center;

color: ${cores.coral};


`;

export const TextCart = styled.text`
/* 0 produto(s) no carrinho */

position: absolute;
width: 256px;
height: 21px;
left: 939px;
top: 59px;

font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 21px;
/* identical to box height */
text-align: right;

color: ${cores.coral};


`