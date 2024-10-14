import styled from 'styled-components';
import { cores } from '../../styles';
import { Link } from 'react-router-dom';

// Defina o estilo do botão padrão
export const ButtonContainer = styled.button`
  position: relative;
  
  width: 90px;
  height: 30px;
  background-color: ${cores.coral};
  color: ${cores.branca};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 16.41px;
  padding: 5px;
  text-align: center;
  text-decoration: none;

  /* Estilo hover para mudança de cor */
  &:hover {
    background-color: ${cores.coralDark};
  }

  /* Ajuste de margem ou posição (opcional) */
  margin-top: 140px; /* Substitui 'top' para melhor layout responsivo */
  margin-left: 8px;  /* Substitui 'left' para melhor controle */
`;

// Defina o estilo do botão com link
export const ButtonLink = styled(Link)`
  position: relative;
  width: 90px;
  height: 30px;
  background-color: ${cores.coral};
  color: ${cores.creme};
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  

  /* Ajuste de margem ou posição (opcional) */
  margin-top: 140px; /* Substitui 'top' para melhor layout responsivo */
  margin: 8px;  /* Substitui 'left' para melhor controle */
  
`;

export const AddToCartButton = styled.button`
  background-color:#fff;
  color: #e66767;
  border: none;
  width:100%;
  height:24px;
  margin-top: 30px;
  font-family: 'Roboto',sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  cursor: pointer;
`;

