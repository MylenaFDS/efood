import styled from 'styled-components';
import { cores } from '../../styles';

// Contêiner principal da página de carrinho
export const CartContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: #000000CC;
`;



// Mensagem de carrinho vazio
export const EmptyCartMessage = styled.p`
  font-size: 1.2rem;
  color: #777;
  text-align: center;
`;

// Lista de itens do carrinho
export const CartItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
 
`;

// Estilo para cada item do carrinho
export const CartItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Alinha os itens no topo */
  padding: 8px;
  border-bottom: 1px solid #ddd;
  width: 344px;
  background: #fff;
  margin:0px 0px 16px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0; /* Remove o espaço do último item */
  }
`;



export const ProductImage = styled.img`

  width: 80px; /* Defina a largura desejada */
  height: 80px; /* Defina a altura desejada */
  
  
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0px 0px 0px 8px;
`;




// Nome do produto
export const ProductName = styled.h3`
font-family: Roboto,sans-serif;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 21px;
text-align: left;
margin-bottom:20px;
color: ${cores.coral};
white-space: nowrap;

`;

// Preço do produto
export const ProductPrice = styled.p`
font-family: 'Roboto',sans-serif;
font-size: 14px;
margin-top: 5px; /* Espaçamento entre nome e preço */
color: ${cores.coral};
`;

// Total geral do carrinho
export const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between; /* Distribui os itens entre os lados */
  align-items: center;
  padding: 15px 0;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
 
  margin-top: 20px; /* Espaço acima do total */
  color: #fff;
`;


// Botão de finalizar compra
export const CheckoutButton = styled.button`
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
  padding: 15px;
  background-color: #e66767;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  display: block;
  text-align: center;
  border-radius: 5px;

  &:hover {
    background-color: #d55555;
  }
`;

export const CartSidebarContainer = styled.div`
position: fixed;
right: 0;
top: 0;
width: 360px; // Defina a largura que preferir
height: 100%;
background-color: white; // Cor de fundo
box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
padding: 32px 8px 8px;
z-index: 1000; // Certifique-se de que a barra lateral fique acima de outros componentes
transition: transform 0.3s ease;
background-color:${cores.coral};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000CC; /* Cor escura com opacidade */
  z-index: 1; /* Deve estar abaixo do carrinho, mas acima de outros conteúdos */
  transition: opacity 0.3s ease; /* Efeito de transição se necessário */
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  color: red; // Cor do botão de fechar
`;
