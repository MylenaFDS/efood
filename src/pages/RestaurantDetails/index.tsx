import React, { useState } from 'react';
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
import restaurants from '../../data/restaurants';
import { AddToCartButton } from '../../components/Buttons/styles';

const RestaurantDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((rest) => rest.id === Number(id));

  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  if (!restaurant) {
    return <p>Restaurante não encontrado.</p>;
  }

  return (
    <>
      <Header />
      <RestaurantDetailsContainer backgroundImage={restaurant.image}>
        <RestaurantTag>{restaurant.tag}</RestaurantTag>
        <RestaurantTitle>{restaurant.name}</RestaurantTitle>
      </RestaurantDetailsContainer>

      {restaurant.products && restaurant.products.length > 0 && (
        <ProductsContainer>
          {restaurant.products.map((product, index) => (
            <ProductItem key={index} onClick={() => handleProductClick(product)}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
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
          <ProductImage src={selectedProduct.image} alt={selectedProduct.name} />
          <ProductInfo>
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p>Serve: {selectedProduct.quantidade}</p>
            <AddToCartButton>
              Adicionar ao carrinho - {selectedProduct.price}
            </AddToCartButton>
          </ProductInfo>
        </ProductPopup>
      </PopupOverlay>
      
      
      )}
    </>
  );
};

export default RestaurantDetails;
