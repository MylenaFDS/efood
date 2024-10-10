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
`;

export const RestaurantImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const RestaurantTag = styled.h2`
  position: absolute;
  top: 10px;
  left: 170px;
  width: 101px;
  height: 33.25px;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 100; /* Ajustado para deixar a letra mais fina */
  line-height: 38px;
  color: #FFFFFF;
  text-align: left;
  margin-left: 20px; /* Ajuste de espaçamento à esquerda */
  opacity: 0.7; /* Deixa a tag um pouco translúcida */
`;

export const RestaurantTitle = styled.h2`
  margin-top:200px;
  font-size: 2rem;
  font-weight:900px;
  margin-bottom: 10px;
  line-height:37.5px;
  color:#FFFFFF;
  margin-left:170px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cards por linha */
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProductItem = styled.div`
  flex: 1 1 200px;
  border: 1px solid ${cores.coral};
  padding: 10px;
  text-align: center;

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
