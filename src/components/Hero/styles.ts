import styled from 'styled-components';
import { cores } from '../../styles';

export const HeroContainer = styled.div`
  position: absolute;
  max-width:1024px;
  width: 100%;
  height: 384px;
  left: 0px;
  top: -24px;
  background: ${cores.creme};
  object-fit:cover;
`;

export const HeroText = styled.h1`
font-weight: bold;
font-size: 36px;
max-width: 539px;
text-align: center;
margin-bottom: 40px;


  color: ${cores.coral};
`;

export const Logo = styled.img`
  position: absolute;
  width: 125px;
  height: 57.5px;
  left: 321px;
  right:321px;
  top: 40px;

  background: ${cores.coral};
`;
export const Fundo = styled.img`
position: absolute;
width: 100%;
height: 100%;
left: 0px;
top: -24px;
`;