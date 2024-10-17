import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 20px;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurant: any; // Substitua 'any' pelo modelo correto, se necessário
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, restaurant }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <h2>{restaurant.name}</h2>
        <img src={restaurant.image} alt={restaurant.name} />
        <p>{restaurant.description}</p>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
