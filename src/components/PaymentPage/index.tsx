import React, { useState, useEffect } from 'react';
import { PaymentContainer, Label, Input, RowContainer, SubmitButton, BackButton, ConfirmationContainer, Message, CloseButton } from './styles';

interface OrderConfirmationProps {
  orderId: string; // Adicionando a propriedade orderId
  onClose: () => void; // Função para fechar a confirmação
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ orderId, onClose }) => {
  return (
    <ConfirmationContainer>
      <h2>Pedido realizado - <strong>#{orderId}</strong></h2>
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
      <CloseButton type="button" onClick={onClose}>Concluir</CloseButton>
    </ConfirmationContainer>
  );
};

interface PaymentPageProps {
  onConfirmPayment: (paymentData: {
    cardNumber: string;
    cardName: string;
    expiryDateMonth: string;
    expiryDateYear: string;
    cvv: string;
  }) => void;
  onBackToDelivery: () => void;
  totalAmount: number;
}

const initialPaymentState = {
  cardNumber: '',
  cardName: '',
  expiryDateMonth: '',
  expiryDateYear: '',
  cvv: '',
};

const generateRandomOrderId = () => {
  return Math.floor(10000 + Math.random() * 90000).toString(); // Gera um número aleatório de 5 dígitos como string
};

const PaymentPage: React.FC<PaymentPageProps> = ({
  onConfirmPayment,
  onBackToDelivery,
  totalAmount,
}) => {
  const [paymentData, setPaymentData] = useState(initialPaymentState);
  const [errorMessage, setErrorMessage] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null); // Estado para armazenar o ID do pedido

  // Limpa a mensagem de erro após 3 segundos
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPaymentData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { cardNumber, cvv } = paymentData;

    // Validações simples
    if (!/^\d{16}$/.test(cardNumber)) {
      setErrorMessage('O número do cartão deve ter 16 dígitos.');
      return;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      setErrorMessage('O CVV deve ter 3 dígitos.');
      return;
    }

    // Limpa a mensagem de erro
    setErrorMessage('');

    // Chama a função de confirmação de pagamento
    onConfirmPayment(paymentData);

    // Gera um novo ID de pedido e marca como confirmado
    setOrderId(generateRandomOrderId());
    setOrderConfirmed(true);
  };

  const handleCompleteOrder = () => {
    setOrderConfirmed(false); // Reseta o estado de confirmação
    setOrderId(null); // Limpa o ID do pedido
    setPaymentData(initialPaymentState); // Reseta os dados do pagamento
  };

  return (
    <PaymentContainer>
      {!orderConfirmed ? (
        <>
          <h2>
            Pagamento - Valor a pagar: <span>R$ {totalAmount.toFixed(2)}</span>
          </h2>
          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <p aria-live="assertive" style={{ color: '#fff', marginTop: '10px' }}>
                {errorMessage}
              </p>
            )}

            <Label htmlFor="cardName">Nome no Cartão</Label>
            <Input
              id="cardName"
              type="text"
              placeholder="Nome Completo"
              value={paymentData.cardName}
              onChange={handleChange}
              required
            />

            <RowContainer>
              <div>
                <label htmlFor="cardNumber">Número do Cartão</label>
                <Input
                  id="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={paymentData.cardNumber}
                  onChange={handleChange}
                  required
                  maxLength={16}
                />
              </div>

              <div>
                <label htmlFor="cvv">CVV</label>
                <Input
                  id="cvv"
                  type="text"
                  placeholder="123"
                  value={paymentData.cvv}
                  onChange={handleChange}
                  required
                  maxLength={3}
                />
              </div>
            </RowContainer>

            <RowContainer>
              <div>
                <label htmlFor="expiryDateMonth">Mês de vencimento</label>
                <Input
                  id="expiryDateMonth"
                  type="text"
                  placeholder="MM"
                  value={paymentData.expiryDateMonth}
                  onChange={handleChange}
                  required
                  maxLength={2}
                />
              </div>

              <div>
                <label htmlFor="expiryDateYear">Ano de vencimento</label>
                <Input
                  id="expiryDateYear"
                  type="text"
                  placeholder="AA"
                  value={paymentData.expiryDateYear}
                  onChange={handleChange}
                  required
                  maxLength={2}
                />
              </div>
            </RowContainer>

            <SubmitButton type="submit">Finalizar Pagamento</SubmitButton>
            <BackButton type="button" onClick={onBackToDelivery}>
              Voltar para edição de endereço
            </BackButton>
          </form>
        </>
      ) : (
        orderId && (
          <OrderConfirmation
            orderId={orderId} // Usando o ID gerado
            onClose={handleCompleteOrder} // Função para fechar a confirmação
          />
        )
      )}
    </PaymentContainer>
  );
};

export default PaymentPage;




