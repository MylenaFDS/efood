import React, { useState } from 'react';
import DeliveryPage from '../DeliveryPage';
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
  const [isDeliveryPage, setIsDeliveryPage] = useState(false);

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleContinueToDelivery = () => {
    setIsDeliveryPage(true);
  };

  const handleDeliverySubmit = (deliveryData: { name: string; address: string; phone: string }) => {
    fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ deliveryData, cartItems, totalAmount }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao concluir o pedido. Tente novamente.');
        }
        return response.json();
      })
      .then((data) => {
        // Exibir a tela de confirmação com os dados recebidos da API
        console.log('Pedido confirmado:', data);
        // Você pode definir um estado para exibir a tela de confirmação com `data` retornado
        // Exemplo: setOrderConfirmed(true) e armazenar `data` no estado.
      })
      .catch((error) => {
        console.error('Erro ao concluir pedido:', error);
        // Exibir mensagem de erro ou lógica adicional para lidar com o erro
      });
  };
  

  return (
    <CartSidebarContainer>
      {isDeliveryPage ? (
        <DeliveryPage onSubmit={handleDeliverySubmit} />
      ) : (
        <>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {cartItems.length === 0 ? (
            <EmptyCartMessage>
              <TotalAmount>
                <span>Valor total:</span>
                <span>R$ {totalAmount.toFixed(2)}</span>
              </TotalAmount>
              <CheckoutButton onClick={handleContinueToDelivery}>Continuar com a entrega</CheckoutButton>
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
              <CheckoutButton onClick={handleContinueToDelivery}>Continuar com a entrega</CheckoutButton>
            </>
          )}
        </>
      )}
    </CartSidebarContainer>
  );
};

export default Cart;


