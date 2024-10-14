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
  position: relative; 

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1; 
  }

  color: #FFFFFF;
  z-index: 2; 

  /* Media Queries */
  @media (max-width: 768px) {
    margin-top: 150px;
    height: 200px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    margin-top: 100px;
    height: 180px;
    padding: 5px;
    flex-direction: column; /* Altera a direção do flex para coluna em telas pequenas */
  }
`;

export const RestaurantImage = styled.img`
  width: 304px;
  height: 167px;
  top: 506px;
  left: 179px;
  gap: 0px;
  opacity: 0px;

  /* Media Queries */
  @media (max-width: 768px) {
    width: 100%; /* Adapta a imagem para ocupar 100% da largura */
    height: auto; /* Mantém a proporção */
  }
`;

export const RestaurantTag = styled.h4`
  position: absolute;
  top: 10px;
  left: 170px;

  height: 33.25px;
  font-family: Roboto, sans-serif;
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
  color: #FFFFFF;
  text-align: left;
  margin-left: 20px;
  opacity: 0.6;

  z-index: 1; 

  /* Media Queries */
  @media (max-width: 768px) {
    font-size: 24px; /* Diminui o tamanho da fonte em telas menores */
    left: 10px; /* Ajusta a posição em telas menores */
  }
`;

export const RestaurantTitle = styled.h2`
  margin-top: 200px;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 10px;
  line-height: 37.5px;
  color: #FFFFFF;
  margin-left: 170px;
  opacity: 1;
  position: relative; 
  z-index: 2; 

  /* Media Queries */
  @media (max-width: 768px) {
    font-size: 1.5rem; /* Diminui o tamanho da fonte em telas menores */
    margin-left: 10px; /* Ajusta a margem */
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
  width: 100%;
  max-width: 1024px;
  top: 30px;
  margin: 0 auto; 
  padding: 20px; 
  position: relative; 
  opacity: 1; 

  /* Media Queries */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards por linha em telas menores */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 card por linha em telas muito pequenas */
  }
`;

export const ProductItem = styled.div`
  flex: 1 1 200px;
  border: 1px solid ${cores.coral};
  padding: 10px;
  text-align: left;
  font-family: 'Roboto';
  width: 320px;
  height: 338px;
  top: 336px;
  background: ${cores.coral};

  img {
    width: 100%;
    height: 167px;
  }

  h3 {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 900;
    line-height: 18.75px;
    text-align: left;
    color: ${cores.creme};
  }

  p {
    margin-top: 10px;
    color: ${cores.creme};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
  }

  span {
    display: block;
    margin-top: 5px;
    font-weight: bold;
  }

  /* Media Queries */
  @media (max-width: 768px) {
    width: 100%; /* Ocupa 100% da largura disponível */
    height: auto; /* Mantém a proporção */
  }
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000000CC;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ProductPopup = styled.div`
  display: flex;
  background: #E66767;
  width: 1024px;
  max-width: 100%;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  gap: 20px; 

  /* Media Queries */
  @media (max-width: 768px) {
    flex-direction: column; /* Muda a direção para coluna em telas menores */
    width: auto; /* Ocupa a largura disponível */
  }
`;

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  /* Media Queries */
  @media (max-width: 768px) {
    width: 100%; /* Ocupa 100% da largura disponível */
    height: auto; /* Mantém a proporção */
  }
`;

export const ProductInfo = styled.div`
  width: 656px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  flex: 1;

  button {
    width: 218px;
    height: 24px;
    gap: 0px;
    opacity: 0px;
    
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: center;
  }
  
  /* Media Queries */
  @media (max-width: 768px) {
    width: 100%; /* Ocupa 100% da largura disponível */
    height: auto; /* Mantém a proporção */
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #fff;
`;
