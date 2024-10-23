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
  text-align: center;
`;

// Lista de itens do carrinho
export const CartItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Estilo para cada item do carrinho
// Estilo para cada item do carrinho
export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  width: 344px;
  background: #fff;
  margin: 0px 0px 16px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;



// Imagem do produto
export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
`;

// Informações do produto
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0px 0px 0px 8px;
  flex-grow: 1;
`;

// Nome do produto
export const ProductName = styled.h3`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
  margin-bottom: 20px;
  color: ${cores.coral};
  white-space: nowrap;
`;

// Preço do produto
export const ProductPrice = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  margin-top: 5px;
  color: ${cores.coral};
`;

// Ícone de lixeira
// Ícone de lixeira
// Ícone de lixeira
export const TrashIcon = styled.button`
  background: none;
  border: none;
  color: ${cores.coral};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px; /* Ajuste de largura */
  height: 24px;
  
  img {
    width: 16px;
    height: 16px;
    margin-top:50px;
    margin-right:50px;
  }
`;



// Total geral do carrinho
export const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  margin-top: 20px;
  color: #fff;
`;

// Botão de finalizar compra
export const CheckoutButton = styled.button`
  width: 100%;
  max-width: 344px;
  height: 24px;
  margin: auto;
  padding: 0;
  background-color: #fff;
  color: ${cores.coral};
  font-size: 14px;
  border: none;
  cursor: pointer;
  display: block;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-weight: 700;
`;
export const ErrorMessage = styled.p`
  color: #fff;
  font-size: 14px;
  margin: 10px 0;
  text-align: center;
`;
// Contêiner da barra lateral do carrinho
export const CartSidebarContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 360px;
  height: 100%;
  background-color: ${cores.coral};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 32px 8px 8px;
  z-index: 1000;
  transition: transform 0.3s ease;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000CC;
  z-index: 1;
  transition: opacity 0.3s ease;
`;



