import styled from 'styled-components';
import { cores } from '../../styles';
import Vector from '../../assets/images/Vector.svg'

export const HeroContainer = styled.div`
position:absolute;
width:100%;
height: 384px;
top: -24px;
left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajusta o deslocamento */
  background: ${cores.creme};
  object-fit:cover;
  background-image: url(${Vector});
`;


export const HeroText = styled.h1`
  position: absolute;
  width: 539px;
  height: 84px;
  left:414px;
  top: 236px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajusta o deslocamento */
  text-align: center;
  color: ${cores.coral};

  @media (max-width: 768px) {
    width: 80%;
    font-size: 10px; /* Reduz a fonte para tablets */
    top: 200px;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 28px; /* Reduz ainda mais a fonte para dispositivos móveis */
    top: 180px;
  }
`;

export const Logo = styled.img`
/* logo */

position: absolute;
width: 125px;
height: 57.5px;
left: 621px;
top: 40px;

left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajusta o deslocamento */
  background: ${cores.coral};
`;

