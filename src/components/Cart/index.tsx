import React, { useState } from 'react';
import DeliveryPage from '../DeliveryPage';
import PaymentPage from '../PaymentPage';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { addItemToCart, removeItemFromCart, removeAllItemsFromCart } from '../../store/cartSlice'; // Importando a ação
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

// Definindo a interface para o item do carrinho
interface CartItem {
  id: number;
  nome: string;
  preco: number;
  foto: string;
}

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
  const [duplicateItemMessage, setDuplicateItemMessage] = useState('');

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleRemoveAllItems = () => {
    dispatch(removeAllItemsFromCart());
  };

  const handleAddItem = (item: CartItem) => { // Definindo o tipo do parâmetro 'item'
    const itemExists = cartItems.find(cartItem => cartItem.id === item.id);
    
    if (itemExists) {
      setDuplicateItemMessage("Pedido já adicionado ao carrinho");
      return;
    }

    dispatch(addItemToCart(item));
    setDuplicateItemMessage('');
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

  // Defina o tipo apropriado para deliveryData
  const handleDeliverySubmit = (deliveryData: any) => {
    console.log('Dados de entrega enviados:', deliveryData);
    setIsPaymentPage(true);
  };

  // Defina o tipo apropriado para paymentData
  const handleConfirmPayment = (paymentData: any) => {
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
        setOrderId(data.orderId);
      })
      .catch((error) => {
        console.error('Erro ao confirmar pagamento:', error);
      });
  };

  const handleCloseConfirmation = () => {
    console.log('Fechando a confirmação...');
    setOrderId(null);
    setIsDeliveryPage(false);
    setIsPaymentPage(false);
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
          onClose={onClose} 
          handleRemoveAllItems={handleRemoveAllItems}
        />
      ) : isDeliveryPage ? (
        <DeliveryPage 
          onSubmit={handleDeliverySubmit} 
          onBackToCart={handleBackToCart} 
        />
      ) : (
        <>
          {duplicateItemMessage && <ErrorMessage>{duplicateItemMessage}</ErrorMessage>}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {cartItems.length === 0 ? (
            <EmptyCartMessage>
              <p>Seu carrinho está vazio.</p>
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
