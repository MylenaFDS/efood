import styled from 'styled-components';
import { cores } from '../../styles'; // Ajuste o caminho conforme necessário


export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  height: 298px;
  background: ${cores.creme}; // Ajuste conforme necessário
  top: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto; /* Centraliza horizontalmente */

  @media (max-width: 768px) {
    height: auto; /* Ajusta a altura conforme o conteúdo */
    padding: 20px; /* Adiciona espaçamento */
    justify-content: space-around; /* Ajusta o espaçamento */
    margin: 0 auto; /* Garante a centralização horizontal */
    
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 15px;
    justify-content: center;
    flex-direction: column; /* Coloca os elementos em uma coluna */
    margin: 0 auto; /* Centraliza horizontalmente */
    flex-direction: column; /* Coloca os elementos em uma coluna para melhor visualização em telas pequenas */
  }
`;


export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100px;
    height: 46px; /* Reduz o tamanho da logo em telas menores */
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 36.5px; /* Reduz ainda mais em dispositivos móveis */
  }
`;

export const SocialMedia = styled.img`
  width: 88px;
  height: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 70px;
    height: 20px; /* Reduz o tamanho dos ícones em tablets */
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 18px; /* Ajusta para telas menores */
  }
`;

export const Disclaimer = styled.p`
  width: 480px;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  text-align: center;
  color: ${cores.coral};

  @media (max-width: 768px) {
    width: 300px; /* Reduz a largura em tablets */
    font-size: 9px;
  }

  @media (max-width: 480px) {
    width: 390px; /* Ajusta para telas menores */
    font-size: 8px;
  }
`;
