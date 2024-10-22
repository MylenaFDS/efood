import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  CartSidebarContainer, // Renomeado de CartContainer
  EmptyCartMessage,
  CartItemsList,
  CartItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  TotalAmount,
  CheckoutButton,
} from './styles';

interface CartProps {
  onClose: () => void;  // Mantido para fechar o cart
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  return (
    <CartSidebarContainer>
      {cartItems.length === 0 ? (
        <EmptyCartMessage><TotalAmount>
        <span>Valor total:</span>
        <span>R$ {totalAmount.toFixed(2)}</span>
      </TotalAmount>

      <CheckoutButton>Continuar com a entrega</CheckoutButton></EmptyCartMessage>
      ) : (
        <>
          <CartItemsList>
            {cartItems.map((item, index) => (
              <CartItem key={index}>
                <ProductImage src={item.foto} alt={item.nome} />
                <ProductInfo>
                  <ProductName>{item.nome}</ProductName>
                  <ProductPrice>R$ {item.preco.toFixed(2)}</ProductPrice>
                </ProductInfo>
              </CartItem>
            ))}
          </CartItemsList>
          <TotalAmount>
            <span>Valor total:</span>
            <span>R$ {totalAmount.toFixed(2)}</span>
          </TotalAmount>

          <CheckoutButton>Continuar com a entrega</CheckoutButton>
        </>
      )}
    </CartSidebarContainer>
  );
};

export default Cart;
