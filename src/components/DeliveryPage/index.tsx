import React, { useState } from 'react';
import { DeliveryContainer, Label, Input, RowContainer, SubmitButton, BackButton } from './styles';

interface DeliveryPageProps {
  onSubmit: (deliveryData: { name: string; address: string; city: string; cep: string; phone: string; complement: string }) => void;
  onBackToCart: () => void; // Nova prop para voltar ao carrinho
}

const DeliveryPage: React.FC<DeliveryPageProps> = ({ onSubmit, onBackToCart }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  const [complement, setComplement] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, address, city, cep, phone, complement });
  };

  
  return (
    <DeliveryContainer>
      <h2>Entrega</h2>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">Quem irá receber:</Label>
        <Input
          id="name"
          type="text"
          placeholder="Digite seu nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Label htmlFor="address">Endereço</Label>
        <Input
          id="address"
          type="text"
          placeholder="Digite seu endereço"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <Label htmlFor="city">Cidade</Label>
        <Input
          id="city"
          type="text"
          placeholder="Digite sua cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <RowContainer>
          <div>
            <Label htmlFor="cep">CEP</Label>
            <Input
              id="cep"
              type="text"
              placeholder="00000-000"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              type="text"
              placeholder="(XX) XXXXX-XXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </RowContainer>

        <Label htmlFor="complement">Complemento (opcional)</Label>
        <Input
          id="complement"
          type="text"
          placeholder="Apt, bloco, etc."
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
        />

        <SubmitButton type="submit">Continuar com o pagamento</SubmitButton>
      </form>
      <BackButton type="button" onClick={onBackToCart}>Voltar para o Carrinho</BackButton>
    
    </DeliveryContainer>
  );
};

export default DeliveryPage;



