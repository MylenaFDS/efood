import React, { useState } from 'react';
import { DeliveryContainer, Label, Input, RowContainer, SubmitButton, BackButton } from './styles';

interface DeliveryPageProps {
  onSubmit: (deliveryData: { name: string; address: string; city: string; cep: string; phone: string; complement: string }) => void;
  onBackToCart: () => void;
}

const DeliveryPage: React.FC<DeliveryPageProps> = ({ onSubmit, onBackToCart }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  const [complement, setComplement] = useState('');
  const [cepValid, setCepValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);

  // Máscara de CEP para o formato 00000-000
  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
    if (value.length > 5) {
      value = value.slice(0, 5) + '-' + value.slice(5, 8);
    }
    setCep(value);
    setCepValid(value.length === 9); // Verifica se o comprimento é 9 (incluindo o "-")
  };

  // Máscara de telefone para o formato (00) 00000-0000
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }
    setPhone(value);
    setPhoneValid(value.length === 15); // Verifica se o comprimento é 15 (incluindo parênteses e o "-")
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cepValid && phoneValid) {
      onSubmit({ name, address, city, cep, phone, complement });
    }
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
              onChange={handleCepChange}
              required
              style={{ borderColor: cepValid ? '' : 'red' }} // Estilo condicional para borda
            />
          </div>
          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              type="text"
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={handlePhoneChange}
              required
              style={{ borderColor: phoneValid ? '' : 'red' }} // Estilo condicional para borda
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
        <BackButton type="button" onClick={onBackToCart}>Voltar para o Carrinho</BackButton>
        </form>
    </DeliveryContainer>
      
      
  );
};

export default DeliveryPage;





