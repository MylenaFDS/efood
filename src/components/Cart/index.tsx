import React from 'react';
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
} from './styles';

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItemFromCart(itemId));
  };

  return (
    <CartSidebarContainer>
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

