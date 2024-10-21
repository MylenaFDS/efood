import styled from 'styled-components';

// Contêiner principal da página de carrinho
export const CartContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// Título da página de carrinho
export const CartTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
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
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

// Nome do produto
export const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

// Preço do produto
export const ProductPrice = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Total geral do carrinho
export const TotalAmount = styled.h2`
  font-size: 1.5rem;
  margin-top: 20px;
  text-align: right;
  color: #333;
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
  width: 300px; // Defina a largura que preferir
  height: 100%;
  background-color: white; // Cor de fundo
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  z-index: 1000; // Certifique-se de que a barra lateral fique acima de outros componentes
  transition: transform 0.3s ease;
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
