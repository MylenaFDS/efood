import styled from 'styled-components';
import { cores } from '../../styles';
export const ListingContainer = styled.div`
  position: absolute;
  width: 1024px;
height: 1290px;
top: 40px;


`;
export const Restaurant = styled.div`
  position: absolute;
  width: 472px;
  height: 398px;
  background-color: ${cores.branca};
  border: 1px solid ${cores.coral};
  
`;
export const Highlight = styled.span`
  position: absolute;
  padding:5px;
  width: 150px;
  height: 26px;
  left: 210px;
  top: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-align:center;
  background-color: ${cores.coral};
  color: ${cores.creme};
`;
export const Tag = styled.div`
  position: absolute;
  padding:5px;
  width: 75px;
  height: 26px;
  left: 370px;
  top: 16px;
  background-color: ${cores.coral};
  color: ${cores.creme};
  align-itens:center;
  text-align: center;
  display: inline-block;
 
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
`;
export const RestaurantTitle = styled.h2`
  position: absolute;
  width: auto; /* Ajuste a largura para se adaptar ao conteúdo */
  height: 21px;
  left: 8px;
  top: 225px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${cores.coral};
  white-space: nowrap; /* Impede a quebra de linha */
  overflow: hidden; /* Opcional: esconde o texto que ultrapassa a largura */
  text-overflow: ellipsis; /* Opcional: adiciona "..." no final do texto, se necessário */
`;
export const RestaurantDescription = styled.p`
position: absolute;
  
  width: 456px;
  height: 88px;
  left: 8px;
  top: 262px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.coral}`;