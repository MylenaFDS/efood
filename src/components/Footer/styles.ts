import styled from 'styled-components';
import { cores } from '../../styles'; // Ajuste o caminho conforme necessário

export const FooterContainer = styled.footer`
  position: absolute;
  width: 2031.81px;
  height: 298px;
  left: 0px;
  top: 1850px;
  background: ${cores.creme}; // Ajuste conforme necessário
`;




export const Logo = styled.img`
  position: absolute;
  width: 125px;
  height: 57.5px;
  left: 450px;
  top: 40px; // Ajuste conforme necessário
`;

export const SocialMedia = styled.img`
  position: absolute;
  width: 88px;
  height: 24px;
  left: 465px;
  top: 130px; // Ajuste conforme necessário
`;

export const Disclaimer = styled.p`
  position: absolute;
  width: 480px;
  height: 24px;
  left: 290px;
  top: 200px; // Ajuste conforme necessário
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: ${cores.coral}; // Ajuste conforme necessário
`;
