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
  position: absolute;
  width: 539px;
  height: 84px;
  
  top: 236px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

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