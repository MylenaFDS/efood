import styled from 'styled-components';
import { cores } from '../../styles';
import Vector from '../../assets/images/Vector.svg'

export const HeroContainer = styled.div`
position:absolute;
max-width: 2031.81px;
width:100%;
height: 384px;
top: -24px;

  background: ${cores.creme};
  object-fit:cover;
  background-image: url(${Vector});
`;


export const HeroText = styled.h1`
  position: absolute;
  width: 539px;
  height: 84px;
  margin-left:250px;
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
  margin-left:450px;
  
  top: 40px;
  background: ${cores.coral};
`;

