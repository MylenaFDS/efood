import React, { useState } from 'react';
import { PaymentContainer, Label, Input, RowContainer, SubmitButton, BackButton } from './styles';

interface PaymentPageProps {
  onConfirmPayment: (paymentData: { cardNumber: string; cardName: string; expiryDateMonth: string; expiryDateYear: string; cvv: string }) => void;
  onBackToDelivery: () => void;
  totalAmount: number;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ onConfirmPayment, onBackToDelivery, totalAmount }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDateMonth, setExpiryDateMonth] = useState('');
  const [expiryDateYear, setExpiryDateYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmPayment({ cardNumber, cardName, expiryDateMonth, expiryDateYear, cvv });
  };

  return (
    <PaymentContainer>
      <h2>
        Pagamento - Valor a pagar: <span>R$ {totalAmount.toFixed(2)}</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="cardName">Nome no Cartão</Label>
        <Input
          id="cardName"
          type="text"
          placeholder="Nome Completo"
          value={cardName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCardName(e.target.value)}
          required
        />

        <RowContainer>
          <div>
            <label htmlFor="cardNumber">Número do Cartão</label>
            <Input
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCardNumber(e.target.value)}
              required
              maxLength={16}
            />
          </div>

          <div>
            <label htmlFor="cvv">CVV</label>
            <Input
              id="cvv"
              type="password"
              placeholder="123"
              value={cvv}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCvv(e.target.value)}
              required
              maxLength={3}
            />
          </div>
        </RowContainer>

        <RowContainer>
          <div>
            <label htmlFor="expiryMonth">Mês de vencimento</label>
            <Input
              id="expiryMonth"
              type="text"
              placeholder="MM"
              value={expiryDateMonth}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpiryDateMonth(e.target.value)}
              required
              maxLength={2}
            />
          </div>

          <div>
            <label htmlFor="expiryYear">Ano de vencimento</label>
            <Input
              id="expiryYear"
              type="text"
              placeholder="AA"
              value={expiryDateYear}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpiryDateYear(e.target.value)}
              required
              maxLength={2}
            />
          </div>
        </RowContainer>

        <SubmitButton type="submit">Finalizar Pagamento</SubmitButton>
        <BackButton type="button" onClick={onBackToDelivery}>Voltar para edição de endereço</BackButton>
      </form>
    </PaymentContainer>
  );
};

export default PaymentPage;



