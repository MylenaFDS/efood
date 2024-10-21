import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cartSlice';
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
} from './styles';
import RestaurantModel from '../../modals/RestaurantModal';
import Product from '../../modals/cardapio';
import { AddToCartButton } from '../../components/Buttons/styles';
import Cart from '../../components/Cart'; // Importando o novo Cart

const Perfil: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurantes, setRestaurantes] = useState<RestaurantModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false); // Estado para gerenciar a exibição do carrinho
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes');
        const data = await response.json();
        setRestaurantes(data);
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

  const handleAddToCart = (product: Product) => {
    dispatch(addItemToCart(product));
    setSelectedProduct(null);
    setIsCartOpen(true); // Abre o carrinho ao adicionar um produto
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen); // Alterna a exibição do carrinho
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
            <ProductImage src={selectedProduct.foto} alt={selectedProduct.nome} />
            <ProductInfo>
              <h3>{selectedProduct.nome}</h3>
              <p>{selectedProduct.descricao}</p>
              <p>Serve: {selectedProduct.porcao}</p>
              <AddToCartButton onClick={() => handleAddToCart(selectedProduct)}>
                Adicionar ao carrinho - R$ {selectedProduct.preco}
              </AddToCartButton>
            </ProductInfo>
          </ProductPopup>
        </PopupOverlay>
      )}

      {/* Exibe o carrinho se estiver aberto */}
      {isCartOpen && <Cart onClose={handleCartToggle} />}
    </>
  );
};

export default Perfil;





