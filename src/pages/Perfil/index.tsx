import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import {
  RestaurantDetailsContainer,
  RestaurantTitle,
  RestaurantTag,
  ProductsContainer,
  ProductItem,
  ProductPopup,
  ProductImage,
  ProductInfo,
  PopupOverlay,
  CloseButton,
} from './styles';
import RestaurantModel from '../../modals/RestaurantModal';
import Product from '../../modals/cardapio';

import { AddToCartButton } from '../../components/Buttons/styles';

// Substitua 'restaurantes' pela sua variável ou estado que contém a lista de restaurantes
const Perfil: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurantes, setRestaurantes] = useState<RestaurantModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes'); // Substitua pela URL da sua API
        const data = await response.json();
        setRestaurantes(data); // Ajuste conforme a estrutura dos dados
      } catch (error) {
        console.error('Erro ao buscar restaurantes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const restaurant = restaurantes.find((rest: RestaurantModel) => rest.id === Number(id));

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!restaurant) {
    return <p>Restaurante não encontrado.</p>;
  }

  return (
    <>
      <Header />
      <RestaurantDetailsContainer backgroundImage={restaurant.capa}>
        <RestaurantTag>{restaurant.tipo}</RestaurantTag>
        <RestaurantTitle>{restaurant.titulo}</RestaurantTitle>
      </RestaurantDetailsContainer>

      {restaurant.cardapio && restaurant.cardapio.length > 0 && (
        <ProductsContainer>
          {restaurant.cardapio.map((cardapio, index) => (
            <ProductItem key={index} onClick={() => handleProductClick(cardapio)}>
              <img src={cardapio.foto} alt={cardapio.nome} />
              <h3>{cardapio.nome}</h3>
              <p>{cardapio.descricao}</p>
              <AddToCartButton>
                Adicionar ao carrinho
              </AddToCartButton>
            </ProductItem>
          ))}
        </ProductsContainer>
      )}

{selectedProduct && (
  <PopupOverlay onClick={handleClosePopup}>
    <ProductPopup onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={handleClosePopup}>X</CloseButton>
      <ProductImage src={selectedProduct.foto} alt={selectedProduct.nome} />
      <ProductInfo>
        <h3>{selectedProduct.nome}</h3>
        <p>{selectedProduct.descricao}</p>
        <p>Serve: {selectedProduct.porcao}</p>
        <AddToCartButton>
          Adicionar ao carrinho - R$ {selectedProduct.preco}
        </AddToCartButton>
      </ProductInfo>
    </ProductPopup>
  </PopupOverlay>
)}


    </>
  );
};

export default Perfil;

