import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeItemFromCart, clearErrorMessage } from '../../store/cartSlice'; 
import lixeira from '../../assets/images/lixeira.png';
import {
  CartSidebarContainer,
  EmptyCartMessage,
  CartItemsList,
  CartItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  TrashIcon,
  TotalAmount,
  CheckoutButton,
  ErrorMessage, // Importa o componente de estilo para mensagem de erro
} from './styles';

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const errorMessage = useSelector((state: RootState) => state.cart.errorMessage);

  useEffect(() => {
    // Limpa a mensagem de erro após 3 segundos
    if (errorMessage) {
      const timer = setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage, dispatch]);

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItemFromCart(itemId));
  };

  return (
    <CartSidebarContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {cartItems.length === 0 ? (
        <EmptyCartMessage>
          <TotalAmount>
            <span>Valor total:</span>
            <span>R$ {totalAmount.toFixed(2)}</span>
          </TotalAmount>
          <CheckoutButton>Continuar com a entrega</CheckoutButton>
        </EmptyCartMessage>
      ) : (
        <>
          <CartItemsList>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ProductImage src={item.foto} alt={item.nome} />
                <ProductInfo>
                  <ProductName>{item.nome}</ProductName>
                  <ProductPrice>R$ {item.preco.toFixed(2)}</ProductPrice>
                </ProductInfo>
                <TrashIcon onClick={() => handleRemoveItem(item.id)}>
                  <img src={lixeira} alt="Remover item" width="16" height="16" />
                </TrashIcon>
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


