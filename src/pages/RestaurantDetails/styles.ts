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
  @media (max-width: 1024px) {
    height: 240px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    height: 200px;
    padding: 10px;
  }

  @media (max-width: 640px) {
    height: 180px;
    padding: 8px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    height: 160px;
    padding: 5px;
  }
`;


export const RestaurantImage = styled.img`
  width: 304px;
  height: 167px;
  opacity: 0px;

  /* Media Queries */
  @media (max-width: 1024px) {
    width: 80%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const RestaurantTag = styled.h4`
  position: absolute;
  top: 10px;
  left: 170px;
  font-size: 32px;
  margin-left: 20px;
  color: #FFFFFF;
  opacity: 0.6;

  z-index: 1; 

  /* Media Queries */
  @media (max-width: 1024px) {
    font-size: 28px;
    left: 15px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    left: 10px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    left: 5px;
  }
`;

export const RestaurantTitle = styled.h2`
  margin-top: 200px;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 10px;
  line-height: 37.5px;
  margin-left: 170px;
  color: #FFFFFF;
  position: absolute;
  z-index: 2; 

  /* Media Queries */
  @media (max-width: 1024px) {
    font-size: 1.8rem;
    margin-left: 15px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-left: 5px;
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
  padding: 0 16px; /* Ajuste para melhorar o espaçamento nas bordas */
  position: relative;
  opacity: 1;

  /* Media Queries */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards por linha em telas menores */
    padding: 0 12px; /* Reduz o padding para telas menores */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 card por linha em telas muito pequenas */
    width: 100%;
    padding: 0 8px; /* Ajuste para telas pequenas */
  }
`;

export const ProductItem = styled.div`
  flex: 1 1 200px;
  border: 1px solid ${cores.coral};
  padding: 10px;
  text-align: left;
  font-family: 'Roboto';
  width: 100%; /* Ajusta para ocupar 100% da coluna disponível */
  max-width: 320px; /* Limita a largura máxima para não esticar demais */
  height: auto; /* Ajusta a altura automaticamente */
  background: ${cores.coral};

  img {
    width: 100%;
    height: auto; /* Mantém a proporção da imagem */
    max-height: 167px;
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

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
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
