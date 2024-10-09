// src/pages/RestaurantDetails/styles.ts
import styled from 'styled-components';
import { cores } from '../../styles';

interface RestaurantDetailsContainerProps {
  backgroundImage: string;
}
export const RestaurantDetailsContainer = styled.div<RestaurantDetailsContainerProps>`
    margin-top:300px;
  width:auto;
  height:280px;
  margin: 0 auto;
  padding: 20px;
  background: ${cores.branca};
  border: 1px solid ${cores.coral};
`;

export const RestaurantImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const RestaurantTitle = styled.h2`
  margin-top:200px;
  font-size: 2rem;
  margin-bottom: 10px;
  color: ${cores.coralDark};
`;

export const RestaurantDescription = styled.p`
  font-size: 1rem;
  color: ${cores.coral};
`;

export const ProductsContainer = styled.div`
  display: flex;
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
