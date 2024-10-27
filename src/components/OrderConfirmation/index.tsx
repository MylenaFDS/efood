import React from 'react';
import { ConfirmationContainer, Message, CloseButton } from './styles';

interface OrderConfirmationProps {
  orderId: string; // Adicionando a propriedade orderId
  onClose: () => void; // Função para fechar a confirmação
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ orderId, onClose }) => {
  return (
    <ConfirmationContainer>
      <h2>
        Pedido realizado - <strong>#{orderId}</strong>
      </h2>
      <Message>
        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
        <br />
        <br />
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
        <br />
        <br />
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        <br />
        <br />
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
      </Message>
      <CloseButton type="button" onClick={onClose}>
        Concluir
      </CloseButton>
    </ConfirmationContainer>
  );
};

export default OrderConfirmation;


