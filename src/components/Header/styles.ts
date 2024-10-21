import styled from 'styled-components';
import { cores } from '../../styles';
import Vector from '../../assets/images/Vector.svg';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente os itens */
  align-items: center; /* Centraliza verticalmente os itens */
  position: relative;
  width: 100%; /* Ajusta para ocupar toda a largura */
  height: 186px;
  background: ${cores.creme};
  background-image: url(${Vector});
  background-size: cover; /* Garante que a imagem de fundo cubra toda a área */

  @media (max-width: 768px) {
    height: 150px; /* Ajuste da altura para telas menores */
  }

  @media (max-width: 480px) {
    height: 120px; /* Ajuste da altura para telas ainda menores */
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between; /* Espaça os itens igualmente */
  align-items: center;
  width: 100%;
  max-width: 1024px; /* Ajuste conforme necessário */
  padding: 0 10px; /* Margem interna */
  position: relative;

  @media (max-width: 768px) {
    padding: 0 20px; /* Aumenta o padding para tablets */
    flex-direction: column; /* Organiza os itens em coluna */
    gap: 10px; /* Espaçamento entre os itens */
  }

  @media (max-width: 480px) {
    padding: 0 10px; /* Reduz o padding para telas menores */
    gap: 5px; /* Menor espaçamento entre os itens */
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  background: ${cores.coral}; /* Se precisar de um fundo para a logo */

  @media (max-width: 768px) {
    width: 100px; /* Reduz o tamanho da logo para tablets */
    height: auto;
  }

  @media (max-width: 480px) {
    width: 80px; /* Reduz o tamanho da logo para smartphones */
    height: auto;
  }
`;

export const LinkRestaurants = styled.nav`
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${cores.coral};

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    font-size: 16px; /* Reduz a fonte para tablets */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Reduz a fonte para smartphones */
  }
`;

export const TextCart = styled.div`
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: right;
  color: ${cores.coral};

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    font-size: 16px; /* Reduz a fonte para tablets */
    text-align: center; /* Centraliza o texto para melhor leitura */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Reduz a fonte para smartphones */
    text-align: center; /* Centraliza o texto */
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000CC; /* Cor escura com opacidade */
  z-index: 999; /* Deve estar abaixo do carrinho, mas acima de outros conteúdos */
  transition: opacity 0.3s ease; /* Efeito de transição se necessário */
`;
export const Fundo = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
  z-index: -1; /* Certifica que o fundo fique atrás dos demais itens */
`;
