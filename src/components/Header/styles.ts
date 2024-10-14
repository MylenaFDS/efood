// src/components/Header/styles.ts
import styled from 'styled-components';
import { cores } from '../../styles';
import Vector from '../../assets/images/Vector.svg';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Espaço entre os itens */
  align-items: center; /* Centraliza verticalmente os itens */
  position: relative;
  width: 100%; /* Ajusta para ocupar toda a largura */
  height: 186px;
  background: ${cores.creme};
  object-fit: cover;
  background-image: url(${Vector});
  padding: 0 20px; /* Adiciona padding para espaçamento nas laterais */

  @media (max-width: 768px) {
    flex-direction: column; /* Muda para coluna em telas menores */
    height: auto; /* Permite que a altura se ajuste ao conteúdo */
    padding: 10px 0; /* Ajusta o padding para telas menores */
  }
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
  width: 125px;
  height: 57.5px;
  background: ${cores.coral}; /* Se precisar de um fundo para a logo */
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center; /* Centraliza os itens do nav */
  width: 100%; /* Ajusta a largura para ocupar todo o espaço */
  position: relative;

  @media (max-width: 768px) {
    margin: 10px 0; /* Adiciona espaço acima e abaixo no modo coluna */
  }
`;

export const LinkRestaurants = styled.li`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${cores.coral};
  list-style: none; /* Remove os marcadores da lista */
  margin-right: 20px; /* Espaçamento à direita entre os itens do menu */

  a {
    text-decoration: none; /* Remove o sublinhado do link */
    color: inherit; /* Mantém a cor do texto */
  }
`;

export const TextCart = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
  text-align: center; /* Centraliza o texto */
  color: ${cores.coral};
  margin-left: 20px; /* Espaçamento à esquerda entre o texto e o menu */

  a {
    text-decoration: none; /* Remove o sublinhado do link */
    color: inherit; /* Mantém a cor do texto */
  }
`;

