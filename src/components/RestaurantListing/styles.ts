import styled from 'styled-components';
import { cores } from '../../styles';

export const TitleAndRateContainer = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente os itens no centro */
  justify-content: space-between;
  width: 100%; /* Ocupa toda a largura do contêiner pai */
  margin-top: 10px;
`;

export const RateAndStarContainer = styled.div`
  display: flex;
  align-items: center; /* Alinha a estrela e a nota lado a lado */
`;

export const ListingContainer = styled.div`
  position: relative;
  width: 1024px;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  /* Para tablets */
  @media (max-width: 1024px) {
    width: 768px;
  }

  /* Para dispositivos móveis */
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const Restaurant = styled.div`
  flex: 1 1 45%; /* Para manter dois itens por linha */
  margin: 20px;
  top:440px;
  width:472px;
  height:398px;
  background-color: ${cores.branca};
  border: 1px solid ${cores.coral};
  position: relative;



  
`;

export const Highlight = styled.span`
  position: absolute;
  padding: 5px;
  width: 150px;
  height: 26px;
  left: 48%;
  top: 16px;
  
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  background-color: ${cores.coral};
  color: ${cores.creme};
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
`;

export const RestaurantImage = styled.img`
  width:100%;
  height: 217px;
  object-fit: cover;
`;

export const RestaurantTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: ${cores.coral};
  margin-bottom: 8px;
  margin-left:8px;
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const RestaurantDescription = styled.p`
  width:456px;
  height:88px;
  left:179px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
margin:10px;
top: 702px;

gap: 0px;
opacity: 0px;

  color: ${cores.coral};
  margin-bottom: 16px;

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
  margin-right: 8px; /* Espaçamento entre a nota e a estrela */
`;

export const Star = styled.img`
  width: 21px;
  height: 21px;
`;