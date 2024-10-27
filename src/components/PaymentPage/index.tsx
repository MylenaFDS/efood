import React, { useState, useEffect } from 'react';
import { PaymentContainer, Label, Input, RowContainer, SubmitButton, BackButton } from './styles';
import OrderConfirmation from '../OrderConfirmation';

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
  const [orderId, setOrderId] = useState<string | null>(null); // Novo estado para armazenar o ID do pedido

  // Clear error message after 3 seconds
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

    if (!/^\d{16}$/.test(cardNumber)) {
      setErrorMessage('O número do cartão deve ter 16 dígitos.');
      return;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      setErrorMessage('O CVV deve ter 3 ou 4 dígitos.');
      return;
    }

    setErrorMessage('');
    onConfirmPayment(paymentData);
    setOrderId(generateRandomOrderId()); // Define um novo ID ao confirmar o pagamento
    setOrderConfirmed(true);
  };

  const handleCloseConfirmation = () => {
    setOrderConfirmed(false); // Fecha o carrinho ao concluir
    setOrderId(null); // Reseta o ID do pedido
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
            onClose={handleCloseConfirmation} // Função para fechar a confirmação
          />
        )
      )}
    </PaymentContainer>
  );
};

export default PaymentPage;

