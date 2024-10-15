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
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between; /* Espaça os itens igualmente */
  align-items: center;
  width: 100%;
  max-width: 1024px; /* Ajuste conforme necessário */
  padding: 0 10px; /* Margem interna */
  position: relative;
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  background: ${cores.coral}; /* Se precisar de um fundo para a logo */
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
