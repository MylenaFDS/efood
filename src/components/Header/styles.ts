import styled from 'styled-components';
import { cores } from '../../styles';
import Vector from '../../assets/images/Vector.svg'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente os itens */
  align-items: center; /* Centraliza verticalmente os itens */
  position: relative;
  width: 100%; /* Ajusta para ocupar toda a largura */
  height: 186px;
  background: ${cores.creme};
  object-fit:cover;
  background-image: url(${Vector});
`;

export const Fundo = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
`;

export const Logo = styled.img`
  position:absolute;
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajusta o deslocamento */
  width: 125px;
  height: 57.5px;
  background: ${cores.coral}; /* Se precisar de um fundo para a logo */
`;

export const LinkRestaurants = styled.li`
  position: absolute;
  left: 20px; /* Ajuste conforme necessário */
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${cores.coral};
  a {
    text-decoration: none; /* Remove o sublinhado do link */
    color: inherit; /* Mantém a cor do texto */
  }
`;

export const TextCart = styled.div`
  position: absolute;
  right: 20px; /* Ajuste conforme necessário */
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-decoration:none;
  text-align: right;
  color: ${cores.coral};

  a {
    text-decoration: none; /* Remove o sublinhado do link */
    color: inherit; /* Mantém a cor do texto */
  }
`;
