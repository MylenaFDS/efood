import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  CartSidebarContainer, // Renomeado de CartContainer
  CartTitle,
  EmptyCartMessage,
  CartItemsList,
  CartItem,
  ProductName,
  ProductPrice,
  TotalAmount,
  CheckoutButton,
  CloseButton
} from './styles';

interface CartProps {
  onClose: () => void;  // Mantido para fechar o cart
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  return (
    <CartSidebarContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <CartTitle>Carrinho</CartTitle>
      {cartItems.length === 0 ? (
        <EmptyCartMessage>O carrinho está vazio.</EmptyCartMessage>
      ) : (
        <>
          <CartItemsList>
            {cartItems.map((item, index) => (
              <CartItem key={index}>
                <ProductName>{item.nome}</ProductName>
                <ProductPrice>R$ {item.preco.toFixed(2)}</ProductPrice>
              </CartItem>
            ))}
          </CartItemsList>
          <TotalAmount>Total: R$ {totalAmount.toFixed(2)}</TotalAmount>
          <CheckoutButton>Finalizar compra</CheckoutButton>
        </>
      )}
    </CartSidebarContainer>
  );
};

export default Cart;
