import styled from 'styled-components';
import { cores } from '../../styles'; // Ajuste o caminho conforme necessário

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  height: 298px;
  left: 0px;
  top: 484px;
  background: ${cores.creme}; // Ajuste conforme necessário
  object-fit:cover;

  @media (max-width: 768px) {
    flex-direction: row; /* Garante que em telas menores tudo fique em linha */
    align-items: center;
    justify-content: space-between;
  }
`;




export const Logo = styled.img`
  position: absolute;
  width: 125px;
  height: 57.5px;
  top: 40px; // Ajuste conforme necessário
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajusta o deslocamento */
`;

export const SocialMedia = styled.img`
  position: absolute;
  width: 88px;
  height: 24px;
  left: 465px;
  top: 130px; // Ajuste conforme necessário
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajusta o deslocamento */
`;

export const Disclaimer = styled.p`
  position: absolute;
  width: 480px;
  height: 24px;
  left: 444px;
  top: 200px; // Ajuste conforme necessário
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajusta o deslocamento */
  color: ${cores.coral}; // Ajuste conforme necessário
  object-fit:cover;


`;
