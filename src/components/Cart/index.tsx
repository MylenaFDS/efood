import React, { useState } from 'react';
import DeliveryPage from '../DeliveryPage';
import PaymentPage from '../PaymentPage';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeItemFromCart } from '../../store/cartSlice'; 
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
  ErrorMessage, 
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
  const [isPaymentPage, setIsPaymentPage] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleContinueToDelivery = () => {
    console.log('Navegando para a página de entrega...');
    setIsDeliveryPage(true);
  };

  const handleBackToCart = () => {
    console.log('Voltando para o carrinho...');
    setIsDeliveryPage(false);
    setIsPaymentPage(false);
  };

  const handleDeliverySubmit = (deliveryData: { name: string; address: string; city: string; cep: string; phone: string; complement: string }) => {
    console.log('Dados de entrega enviados:', deliveryData);
    setIsPaymentPage(true);
  };

  const handleConfirmPayment = (paymentData: { cardNumber: string; cardName: string; expiryDateMonth: string; expiryDateYear: string; cvv: string }) => {
    console.log('Confirmando pagamento...', paymentData);
    fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentData, cartItems, totalAmount }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao confirmar o pagamento. Tente novamente.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Pagamento confirmado:', data);
        setOrderId(data.orderId); // Supondo que o id do pedido venha na resposta
      })
      .catch((error) => {
        console.error('Erro ao confirmar pagamento:', error);
      });
  };

  const handleCloseConfirmation = () => {
    console.log('Fechando a confirmação...');
    setOrderId(null); // Resetar orderId quando o usuário fechar a confirmação
    setIsDeliveryPage(false); // Resetar para não ficar na página de entrega
    setIsPaymentPage(false); // Resetar para não ficar na página de pagamento
  };

  return (
    <CartSidebarContainer>
      {orderId ? (
        <>
          <h2>Pedido Confirmado</h2>
          <p>Seu pedido foi confirmado com o ID: {orderId}</p>
          <button onClick={handleCloseConfirmation}>Fechar</button>
        </>
      ) : isPaymentPage ? (
        <PaymentPage 
          onConfirmPayment={handleConfirmPayment} 
          onBackToDelivery={() => setIsPaymentPage(false)} 
          totalAmount={totalAmount} 
        />
      ) : isDeliveryPage ? (
        <DeliveryPage 
          onSubmit={handleDeliverySubmit} 
          onBackToCart={handleBackToCart} 
        />
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
