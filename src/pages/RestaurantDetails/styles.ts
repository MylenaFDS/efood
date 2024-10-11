// src/pages/RestaurantDetails/styles.ts
import styled from 'styled-components';
import { cores } from '../../styles';

interface RestaurantDetailsContainerProps {
  backgroundImage: string;
}
export const RestaurantDetailsContainer = styled.div<RestaurantDetailsContainerProps>`
  margin-top: 300px;
  width: auto;
  height: 280px;
  margin: 0 auto;
  padding: 20px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  position: relative; /* Permite o posicionamento absoluto de elementos filhos */

  /* Adiciona um overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Cor preta com 50% de transparência */
    z-index: 1; /* Coloca o overlay atrás do conteúdo */
  }

  /* Estilos do conteúdo para que fique por cima do overlay */
  color: #FFFFFF;
  z-index: 2; /* Garante que o texto e outros elementos estejam acima do overlay */
`;


export const RestaurantImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const RestaurantTag = styled.h4`
  position: absolute;
  top: 10px;
  left: 170px;
  
  height: 33.25px;
  font-family: Roboto,sans-serif;
  font-size: 32px;
  font-weight: 100; /* Ajustado para deixar a letra mais fina */
  line-height: 38px;
  color: #FFFFFF;
  text-align: left;
  margin-left: 20px; /* Ajuste de espaçamento à esquerda */
  opacity: 0.6; /* Deixa a tag um pouco translúcida */
  
  z-index: 1; /* Garante que o título fique acima do overlay */
`;


export const RestaurantTitle = styled.h2`
  margin-top:200px;
  font-size: 2rem;
  font-weight:900px;
  margin-bottom: 10px;
  line-height:37.5px;
  color:#FFFFFF;
  margin-left:170px;
  opacity:1;
  position: relative; /* Garante que o título esteja acima do overlay */
  z-index: 2; /* Garante que o título fique acima do overlay */
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cards por linha */
  gap: 20px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto; /* Centraliza o contêiner na página */
  padding: 20px; /* Adiciona espaço interno */
  position: relative; /* Remove o position: absolute para que o contêiner fique no fluxo normal */
  opacity: 1; /* Ajuste a opacidade conforme necessário */
`;


export const ProductItem = styled.div`
  flex: 1 1 200px;
  border: 1px solid ${cores.coral};
  padding: 10px;
  text-align: center;
  width:320px;
  height:338px;
  top:336px;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    margin: 10px 0;
    color: ${cores.coralDark};
  }

  p {
    color: ${cores.coral};
  }

  span {
    display: block;
    margin-top: 5px;
    font-weight: bold;
  }
`;
