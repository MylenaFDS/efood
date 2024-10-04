import styled from 'styled-components';
import { cores } from '../../styles';

export const TitleAndRateContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between; /* Alinha título à esquerda e nota/estrela à direita */
  width: 100%; 
  

  @media (max-width: 768px) {
    flex-direction: row; /* Garante que em telas menores tudo fique em linha */
    align-items: center;
    justify-content: space-between;
  }
`;


export const RateAndStarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alinha à direita */
  gap: 1px; /* Espaçamento entre a nota e a estrela */
  
  @media (max-width: 480px) {
    justify-content: flex-end; /* Alinha à direita */
    width: 100%;
  }
`;



export const ListingContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: auto;
  top: 440px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 cards por linha */
  gap: 20px; /* Espaçamento entre os cards */
  justify-items: center;
  padding: 0 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Apenas 1 card por linha em telas menores */
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;


export const Restaurant = styled.div`
  flex: 1 1 30%;
  margin: 20px;
  width: 90%;
  min-width: 280px;
  max-width: 500px;
  min-height: 398px; /* Altura mínima */
  background-color: ${cores.branca};
  border: 1px solid ${cores.coral};
  position: relative;
  display: flex;
  flex-direction: column; /* Para garantir que o conteúdo fique dentro do card */
  justify-content: space-between; /* Distribui o conteúdo igualmente no eixo Y */
  
  @media (max-width: 1024px) {
    flex: 1 1 44%;
  }

  @media (max-width: 768px) {
    flex: 1 1 90%;
    min-width: 100%;
    max-width: 100%;
  }
`;


export const Highlight = styled.span`
  position: absolute;
  padding: 5px;
  width: 150px;
  height:26px;
  top: 16px;
  
  left: 60%;
  transform: translateX(-60%);
  font-family: 'Roboto',sans-serif;
  font-weight: 700;
  font-size: 12px; 
  line-height:14.06px;
  text-align: center;
  background-color: ${cores.coral};
  color: ${cores.creme};
  white-space: nowrap; 

  @media (max-width: 768px) {
    font-size: 14px;
    width: 140px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    width: 130px;
  }
`;

export const Tag = styled.div`
  position: absolute;
  padding: 5px;
  width: 75px;
  height: 26px;
  right: 16px;
  top: 16px;
  background-color: ${cores.coral};
  color: ${cores.creme};
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
    width: 65px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    width: 60px;
  }
`;

export const RestaurantImage = styled.img`
  width: 100%;
  height: 217px; /* Altura fixa para a imagem */
  object-fit: cover;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

export const RestaurantTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: ${cores.coral};
  margin-bottom: 8px;
  margin-left: 8px;
  white-space: nowrap;      /* Garante que o texto não quebre */
  
  

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;


export const RestaurantDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 10px;
  color: ${cores.coral};
  flex-grow: 1; /* Faz com que a descrição ocupe espaço disponível */

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Rate = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${cores.coral};
  margin-right: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Star = styled.img`
  width: 21px;
  height: 21px;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`;
