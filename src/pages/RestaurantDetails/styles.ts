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
width: 304px;
height: 167px;
top: 506px;
left: 179px;
gap: 0px;
opacity: 0px;
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
  top:30px;
  margin: 0 auto; /* Centraliza o contêiner na página */
  padding: 20px; /* Adiciona espaço interno */
  position: relative; /* Remove o position: absolute para que o contêiner fique no fluxo normal */
  opacity: 1; /* Ajuste a opacidade conforme necessário */
`;


export const ProductItem = styled.div`
  flex: 1 1 200px;
  border: 1px solid ${cores.coral};
  padding: 10px;
  text-align: left;
  font-family: 'Roboto';
  width:320px;
  height:338px;
  top:336px;
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
    margin-top:10px;
    color: ${cores.creme};
    font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 22px;
text-align: left;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
    -webkit-line-clamp: 3; /* Número de linhas desejadas antes das reticências */
    -webkit-box-orient: vertical;
  }

  span {
    display: block;
    margin-top: 5px;
    font-weight: bold;
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
  width: 800px;
  max-width: 90%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  gap: 20px; /* Espaçamento entre a imagem e as informações */
`;

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Para manter o botão sempre na parte inferior */
  flex: 1;
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
